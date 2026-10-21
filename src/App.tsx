import { lazy, Suspense, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import {
  ArrowUp,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  Music2,
  Pause,
  Play,
  RotateCcw,
  Share2,
  Sparkles,
  X,
} from "lucide-react"
import {
  calendarHref,
  config,
  maps,
  translations,
  type Copy,
  type Language,
  venue,
} from "./content"
import { Ganesha, Lamp, Lotus } from "./Ornaments"
const GoldenScene = lazy(() => import("./GoldenScene"))

function Divider() {
  return (
    <div className="divider">
      <span />
      <Lotus />
      <span />
    </div>
  )
}
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}
function Countdown({ t }: { t: Copy }) {
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, new Date("2026-11-15T09:00:00+05:30").getTime() - Date.now()),
  )
  useEffect(() => {
    const timer = setInterval(
      () =>
        setRemaining(
          Math.max(
            0,
            new Date("2026-11-15T09:00:00+05:30").getTime() - Date.now(),
          ),
        ),
      1000,
    )
    return () => clearInterval(timer)
  }, [])
  const seconds = Math.floor(remaining / 1000)
  return (
    <section className="countdown-section">
      <Reveal>
        <p className="eyebrow">{t.until}</p>
        <h2>{t.countdown}</h2>
        {remaining > 0 ? (
          <div className="countdown">
            {[
              Math.floor(seconds / 86400),
              Math.floor(seconds / 3600) % 24,
              Math.floor(seconds / 60) % 60,
              seconds % 60,
            ].map((n, i) => (
              <div className="count-unit" key={i}>
                <span>{String(n).padStart(2, "0")}</span>
                <small>{[t.days, t.hours, t.minutes, t.seconds][i]}</small>
              </div>
            ))}
          </div>
        ) : (
          <p className="celebratory">{t.married}</p>
        )}
        <p className="countdown-date">
          {t.weddingDate} <span>·</span> 9:00 AM IST
        </p>
      </Reveal>
    </section>
  )
}
function InvitationCard({ t }: { t: Copy }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  return (
    <div className="card-perspective">
      <div
        className="invitation-card"
        ref={ref}
        onPointerMove={(e) => {
          if (e.pointerType !== "mouse" || reduced || !ref.current) return
          const r = e.currentTarget.getBoundingClientRect()
          ref.current.style.transform = `rotateX(${-(e.clientY - r.top - r.height / 2) / 65}deg) rotateY(${(e.clientX - r.left - r.width / 2) / 65}deg)`
        }}
        onPointerLeave={() => {
          if (ref.current) ref.current.style.transform = ""
        }}
      >
        <div className="card-inner">
          <Ganesha className="card-ganesha" />
          <p className="blessing">{t.blessing}</p>
          <Divider />
          <p className="eyebrow">{t.together}</p>
          <p className="invitation-message">{t.message}</p>
          <h3>
            THEJASHWINI M.H.<em>&</em>KARTHIK M.
          </h3>
          <Divider />
          <p className="card-date">{t.date}</p>
          <p className="card-closing">{t.closing}</p>
          <Lotus className="card-lotus" />
        </div>
        <span className="corner c1" />
        <span className="corner c2" />
        <span className="corner c3" />
        <span className="corner c4" />
      </div>
    </div>
  )
}
function Intro({ t, close }: { t: Copy; close: () => void }) {
  const reduced = useReducedMotion()
  const [opened, setOpened] = useState(false)
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", escape)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", escape)
    }
  }, [close])
  return (
    <motion.div
      className="intro"
      role="dialog"
      aria-modal="true"
      aria-label="Wedding introduction"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="skip" onClick={close}>
        {t.skip} <ArrowUpRight size={14} />
      </button>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Ganesha className="intro-ganesha" />
        <p className="blessing">{t.blessing}</p>
        <p className="eyebrow">THE GOLDEN MANDAPA</p>
      </motion.div>
      <div className={`envelope-scene ${opened ? "is-open" : ""}`}>
        <div className="envelope-card">
          <Lotus />
          <span>Thejashwini M.H.</span>
          <em>&</em>
          <span>Karthik M.</span>
        </div>
        <div className="envelope">
          <div className="envelope-flap" />
          <div className="envelope-front" />
          <div className="seal">
            T<span>&</span>K
          </div>
        </div>
      </div>
      <h2>{t.intro}</h2>
      <button
        className="button gold"
        autoFocus
        onClick={() => {
          if (opened || reduced) close()
          else {
            setOpened(true)
          }
        }}
      >
        {opened ? t.invitation : t.open}
        <ArrowUpRight size={16} />
      </button>
    </motion.div>
  )
}
function PhotoGallery({ t }: { t: Copy }) {
  const [selected, setSelected] = useState<number | null>(null)
  const [videoError, setVideoError] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (selected === null) {
      setVideoError(false)
      return
    }
    setVideoError(false)
    closeRef.current?.focus()
    const old = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null)
      if (e.key === "Tab") {
        e.preventDefault()
        closeRef.current?.focus()
      }
    }
    window.addEventListener("keydown", key)
    return () => {
      document.body.style.overflow = old
      window.removeEventListener("keydown", key)
      triggerRef.current?.focus()
    }
  }, [selected])

  const activeMedia = selected !== null ? config.photos[selected] : null

  return (
    <section className="section gallery-section" id="memories">
      <Reveal>
        <p className="eyebrow">{t.galleryEyebrow}</p>
        <h2>{t.galleryTitle}</h2>
        <p className="section-subtitle">{t.photoNote}</p>
      </Reveal>
      <div className="gallery">
        {config.photos.map((photo, i) => (
          <Reveal className={`photo-wrap photo-${i}`} key={photo.id || i}>
            <button
              className="photo"
              onClick={(e) => {
                triggerRef.current = e.currentTarget
                setSelected(i)
              }}
              aria-label={`${t.memories}: ${photo.label} (${photo.type === "video" ? "Video" : "Photo"})`}
            >
              {photo.src ? (
                photo.type === "video" ? (
                  <div className="photo-video-wrap">
                    <video
                      src={`${photo.src}#t=0.001`}
                      poster={photo.poster}
                      preload="metadata"
                      muted
                      playsInline
                      className="photo-video-thumb"
                    />
                    <div className="video-play-overlay">
                      <div className="video-play-badge" aria-hidden="true">
                        <Play size={20} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                )
              ) : (
                <div className="photo-placeholder">
                  <div className="photo-arch">
                    <Lotus />
                    <span>
                      {i === 0 ? "T & K" : ["", "T", "K", "T · K"][i]}
                    </span>
                    <small>{t.photoSoon}</small>
                  </div>
                </div>
              )}
              <span className="photo-caption">
                {photo.label}
                {photo.type === "video" ? (
                  <Play size={14} fill="currentColor" />
                ) : (
                  <ArrowUpRight size={16} />
                )}
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activeMedia.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              ref={closeRef}
              className="icon-button lightbox-close"
              onClick={() => setSelected(null)}
              aria-label={t.close}
            >
              <X />
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              {activeMedia.src ? (
                activeMedia.type === "video" ? (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <video
                      ref={videoRef}
                      key={activeMedia.src}
                      src={activeMedia.src}
                      poster={activeMedia.poster}
                      controls
                      playsInline
                      autoPlay
                      muted
                      className="lightbox-video"
                      onError={() => setVideoError(true)}
                    >
                      <source src={activeMedia.src} type="video/mp4" />
                      <source src={activeMedia.src} type="video/quicktime" />
                      Your browser does not support the video tag.
                    </video>
                    <p className="lightbox-media-title">{activeMedia.label}</p>
                    {videoError && (
                      <div className="video-error-box">
                        <p>
                          Your browser could not play this video. Please ensure the video format is supported.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img
                      src={activeMedia.src}
                      alt={activeMedia.alt}
                    />
                    <p className="lightbox-media-title">{activeMedia.label}</p>
                  </div>
                )
              ) : (
                <div className="lightbox-placeholder">
                  <Lotus />
                  <h2>{activeMedia.label}</h2>
                  <p>{t.photoSoon}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
function MusicPlayer({ t }: { t: Copy }) {
  const audio = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)
  return (
    <div className="music-control">
      <audio
        ref={audio}
        src={config.music}
        preload="metadata"
        loop
        onPlay={() => {
          setPlaying(true)
          setError(false)
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => {
          setPlaying(false)
          setError(true)
        }}
      >
        <source src={config.music} type="audio/mp4" />
        <source src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/Song/songs.m4a`} type="audio/mp4" />
        <source src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/Song/songs.mp3`} type="audio/mpeg" />
      </audio>
      {error && (
        <span className="music-message" role="status">
          {t.noMusic}
        </span>
      )}
      <button
        className={`music-button ${playing ? "playing" : ""}`}
        aria-label={playing ? t.pause : t.music}
        title={playing ? t.pause : t.music}
        onClick={async () => {
          if (!audio.current) return
          if (playing) {
            audio.current.pause()
          } else {
            try {
              setError(false)
              await audio.current.play()
            } catch (err) {
              console.error("Audio playback error:", err)
              setError(true)
            }
          }
        }}
      >
        {playing ? <Pause size={17} /> : <Music2 size={17} />}
        <span>{playing ? t.pause : t.music}</span>
        <span className="music-bars">
          <i />
          <i />
          <i />
        </span>
      </button>
    </div>
  )
}
export default function App() {
  const [language, setLanguage] = useState<Language>("en")
  const [menu, setMenu] = useState(false)
  const [intro, setIntro] = useState(false)
  const t = translations[language]
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])
  const share = () => {
    let url = config.websiteUrl
    if (
      !url &&
      !/localhost|127\.0\.0\.1|\.local$/.test(location.hostname) &&
      !location.hostname.includes("figma")
    )
      url = location.origin
    if (url && !/^https?:\/\//.test(url)) url = ""
    const message = `Thejashwini M.H. & Karthik M.\n\nReception: Saturday, 14 November 2026, 6:30 PM onwards\nMuhurtham: Sunday, 15 November 2026, 9:00 AM to 9:40 AM IST\n\n${venue}\n${maps}\n\nAwaiting Your Gracious Presence.${url ? `\n\n${url}` : ""
      }`
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }
  const nav = [
    ["invitation", t.invitation],
    ["celebrations", t.celebrations],
    ["venue", t.venue],
    ["memories", t.memories],
  ]
  return (
    <div className={`app lang-${language}`}>
      <header className="header">
        <a
          className="monogram"
          href="#home"
          aria-label="Thejashwini and Karthik home"
        >
          T<span>&</span>K<i />
        </a>
        <nav
          className={menu ? "nav is-visible" : "nav"}
          aria-label="Main navigation"
        >
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-switch">
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <span>/</span>
            <button
              lang="kn"
              className={language === "kn" ? "active" : ""}
              onClick={() => setLanguage("kn")}
            >
              ಕನ್ನಡ
            </button>
          </div>
          <button className="header-share" onClick={share}>
            <Share2 size={14} />
            <span>{t.share}</span>
          </button>
          <button
            className="menu-toggle icon-button"
            onClick={() => setMenu(!menu)}
            aria-label={t.menu}
            aria-expanded={menu}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <Suspense fallback={null}>
            <GoldenScene />
          </Suspense>
          <div className="hero-grain" />
          <div className="temple-arch arch-outer" />
          <div className="temple-arch arch-inner" />
          <div className="hanging-flower flower-left" />
          <div className="hanging-flower flower-right" />
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Ganesha className="hero-ganesha" />
              <p className="blessing">{t.blessing}</p>
              <div className="hero-eyebrow">
                <span />
                {t.wedding}
                <span />
              </div>
              <h1>
                <span>
                  Thejashwini <small>M.H.</small>
                </span>
                <em>&</em>
                <span>
                  Karthik <small>M.</small>
                </span>
              </h1>
              <p className="hero-tagline">{t.intro}</p>
              <div className="hero-date">
                <span />
                {t.date}
                <span />
              </div>
              <p className="hero-place">
                <MapPin size={12} />
                {t.place}
              </p>
              <button
                className="button gold hero-button"
                onClick={() => setIntro(true)}
              >
                <span className="button-ornament">◇</span>
                {t.open}
                <ArrowUpRight size={16} />
              </button>
              <button className="cinematic-link" onClick={() => setIntro(true)}>
                <Play size={10} fill="currentColor" />
                {language === "en"
                  ? "A little magic, before we begin"
                  : "ಒಂದು ಸುಂದರ ಆರಂಭ"}
              </button>
            </motion.div>
          </div>
          <Lamp className="hero-lamp lamp-left" />
          <Lamp className="hero-lamp lamp-right" />
          <div className="hero-bottom">
            <span>AN INVITATION, FROM OUR HEARTS TO YOURS</span>
            <a href="#invitation">
              {t.scroll}
              <ChevronDown size={16} />
            </a>
            <span>EST. 2026 · FOREVER & ALWAYS</span>
          </div>
        </section>
        <section className="section invitation-section" id="invitation">
          <Reveal className="invitation-copy">
            <p className="eyebrow">THE GOLDEN MANDAPA</p>
            <h2>
              {language === "en" ? (
                <>
                  Some stories are
                  <br />
                  written <em>in the stars.</em>
                </>
              ) : (
                "ನಕ್ಷತ್ರಗಳಲ್ಲಿ ಬರೆದ ನಮ್ಮ ಕಥೆ."
              )}
            </h2>
            <Divider />
            <p className="body-copy">{t.message}</p>
            <p className="family-label">{t.family}</p>
            <p className="family-names">Manjunath M.H. & Gunashree M.H.</p>
            <p className="handwritten">{t.closing}</p>
          </Reveal>
          <Reveal className="card-column">
            <InvitationCard t={t} />
            <span className="card-hint">
              <Sparkles size={12} />
              {language === "en"
                ? "A little movement. A little magic."
                : "ಒಂದು ಸುಂದರ ಅನುಭವ."}
            </span>
          </Reveal>
        </section>
        <Countdown t={t} />
        <section className="section events-section" id="celebrations">
          <Reveal>
            <p className="eyebrow">{t.eventsEyebrow}</p>
            <h2>{t.celebrate}</h2>
            <Divider />
          </Reveal>
          <div className="event-grid">
            {[true, false].map((reception) => (
              <Reveal
                key={String(reception)}
                className={`event-card ${!reception ? "muhurtham-card" : ""}`}
              >
                <div className="event-symbol">
                  {reception ? <Heart strokeWidth={1} size={32} /> : <Lotus />}
                </div>
                <span className="event-index">
                  {reception ? "01" : "02"} /{" "}
                  {reception ? "THE EVENING" : "THE SACRED MORNING"}
                </span>
                <h3>{reception ? t.reception : t.muhurtham}</h3>
                <p className="event-date">
                  {reception ? t.receptionDate : t.weddingDate}
                </p>
                <p className="event-time">
                  {reception ? t.receptionTime : t.weddingTime}
                </p>
                <div className="event-line" />
                <p className="event-description">
                  {reception ? t.receptionText : t.weddingText}
                </p>
                <a
                  className="calendar-link"
                  href={calendarHref(reception)}
                  download={`${reception ? "Reception" : "Muhurtham"
                    }-Thejashwini-Karthik.ics`}
                >
                  <CalendarDays size={14} />
                  {t.calendar}
                  <ArrowUpRight size={14} />
                </a>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="venue-section" id="venue">
          <div className="venue-art" aria-hidden="true">
            <div className="venue-arch">
              <Lotus />
              <div className="temple-lines">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <Lamp />
            </div>
          </div>
          <Reveal className="venue-copy">
            <div className="pin-medallion">
              <MapPin size={25} strokeWidth={1} />
            </div>
            <p className="eyebrow">{t.venueEyebrow}</p>
            <h2>{t.venueTitle}</h2>
            <h3>{t.venueName}</h3>
            <p>{t.address}</p>
            <a
              className="button gold"
              href={maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.directions}
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </section>
        <PhotoGallery t={t} />
        <section className="closing-section">
          <Reveal>
            <Ganesha className="closing-ganesha" />
            <p className="eyebrow">{t.family}</p>
            <h2>{t.closing}</h2>
            <p className="closing-names">
              Thejashwini <em>&</em> Karthik
            </p>
            <p className="closing-family"></p>
            <button className="button outline" onClick={share}>
              <Share2 size={15} />
              {t.share}
              <ArrowUpRight size={15} />
            </button>
            <Divider />
            <button className="replay-link" onClick={() => setIntro(true)}>
              <RotateCcw size={12} />
              {t.replay}
            </button>
          </Reveal>
        </section>
      </main>
      <footer>
        <span className="footer-monogram">T & K</span>
        <p>{t.footer}</p>
        <a href="#home" aria-label={t.top}>
          <ArrowUp size={16} />
        </a>
      </footer>
      <MusicPlayer t={t} />
      <AnimatePresence>
        {intro && <Intro t={t} close={() => setIntro(false)} />}
      </AnimatePresence>
    </div>
  )
}
