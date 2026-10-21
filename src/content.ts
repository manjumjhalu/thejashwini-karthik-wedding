export type MediaItem = {
  id: string
  src: string
  alt: string
  label: string
  type: "image" | "video"
  poster?: string
}

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "")

export const config = {
  websiteUrl: import.meta.env.VITE_WEBSITE_URL || "",
  music: `${baseUrl}/Song/songs.m4a`,
  photos: [
    {
      id: "couple",
      src: `${baseUrl}/photos/couple.jpeg`,
      alt: "Thejashwini and Karthik",
      label: "A lifetime, together",
      type: "image",
    },
    {
      id: "bride",
      src: `${baseUrl}/photos/bride.jpeg`,
      alt: "Thejashwini M.H.",
      label: "The bride",
      type: "image",
    },
    {
      id: "groom",
      src: `${baseUrl}/photos/groom.jpeg`,
      alt: "Karthik M.",
      label: "The groom",
      type: "image",
    },
    {
      id: "special-memory",
      src: `${baseUrl}/videos/memory.MOV`,
      poster: `${baseUrl}/photos/couple.jpeg`,
      alt: "A Special Memory",
      label: "A Special Memory",
      type: "video",
    },
  ] as MediaItem[],
}
export const maps = "https://maps.app.goo.gl/E2NjCYftJhQpvYkd9"
export const venue =
  "Shree Guddada Malleshwara Samudaya Bhavana, Mallapura, Bhadravathi Taluk, Karnataka."
export const translations = {
  en: {
    invitation: "The Invitation",
    celebrations: "The Celebrations",
    venue: "The Venue",
    memories: "Our Memories",
    wedding: "THE WEDDING CELEBRATION OF",
    blessing: "|| Shree Ganeshaya Namah ||",
    intro: "Two hearts. One beautiful beginning.",
    open: "Open Invitation",
    skip: "Skip Intro",
    date: "14 & 15 NOVEMBER 2026",
    place: "Shree Guddada Malleshwara Samudaya Bhavana",
    scroll: " ",
    together: "TOGETHER WITH OUR FAMILIES",
    message:
      "We solicit your gracious presence with family & friends on the auspicious occasion of our marriage.",
    closing: "Awaiting Your Gracious Presence.",
    family: "WITH THE LOVE OF",
    countdown: "Every moment brings us closer",
    until: "UNTIL OUR FOREVER BEGINS",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    married: "Our forever begins. Let the celebrations bloom!",
    celebrate: "A celebration of love & tradition",
    eventsEyebrow: "TWO DAYS. A LIFETIME OF MEMORIES.",
    reception: "Reception",
    muhurtham: "Muhurtham",
    receptionDate: "Saturday, 14 November 2026",
    weddingDate: "Sunday, 15 November 2026",
    receptionTime: "6:30 PM onwards",
    weddingTime: "9:00 AM to 9:40 AM IST",
    receptionText:
      "An evening of laughter, warm embraces, and beautiful beginnings.",
    weddingText:
      "Join us as we tie the sacred knot, surrounded by love and blessings.",
    calendar: "Add to Calendar",
    venueEyebrow: "WHERE OUR FOREVER BEGINS",
    venueTitle: "A place for beautiful beginnings",
    venueName: "Shree Guddada Malleshwara Samudaya Bhavana",
    address: "Mallapura, Bhadravathi Taluk, Karnataka.",
    directions: "Get Directions",
    galleryEyebrow: "LITTLE MOMENTS, INFINITE LOVE",
    galleryTitle: "Our story, in frames",
    photoNote: "A beautiful story is coming into focus.",
    photoSoon: "Our photographs, coming soon",
    share: "Share on WhatsApp",
    replay: "Replay the introduction",
    music: "Play music",
    pause: "Pause music",
    noMusic: "Our wedding soundtrack is coming soon.",
    close: "Close",
    top: "Back to top",
    footer: "Made with love. Celebrated with you.",
    menu: "Open navigation",
  },
  kn: {
    invitation: "ಆಮಂತ್ರಣ",
    celebrations: "ಸಮಾರಂಭಗಳು",
    venue: "ಸ್ಥಳ",
    memories: "ನಮ್ಮ ನೆನಪುಗಳು",
    wedding: "ವಿವಾಹ ಮಹೋತ್ಸವ",
    blessing: "|| ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ ||",
    intro: "ಎರಡು ಹೃದಯಗಳು. ಒಂದು ಸುಂದರ ಆರಂಭ.",
    open: "ಆಮಂತ್ರಣ ತೆರೆಯಿರಿ",
    skip: "ನೇರವಾಗಿ ಮುಂದುವರಿಯಿರಿ",
    date: "14 & 15 ನವೆಂಬರ್ 2026",
    place: "ಭದ್ರಾವತಿ, ಕರ್ನಾಟಕ",
    scroll: "ಮುಂದೆ ನೋಡಿ",
    together: "ನಮ್ಮ ಕುಟುಂಬಗಳೊಂದಿಗೆ",
    message:
      "ನಮ್ಮ ವಿವಾಹದ ಶುಭ ಸಂದರ್ಭದಲ್ಲಿ ಕುಟುಂಬ ಮತ್ತು ಸ್ನೇಹಿತರೊಂದಿಗೆ ಆಗಮಿಸಿ ಆಶೀರ್ವದಿಸಬೇಕಾಗಿ ಪ್ರೀತಿಯ ಆಮಂತ್ರಣ.",
    closing: "ನಿಮ್ಮ ಶುಭಾಗಮನದ ನಿರೀಕ್ಷೆಯಲ್ಲಿ.",
    family: "ಪ್ರೀತಿ",
    countdown: "ಪ್ರತಿ ಕ್ಷಣವೂ ನಮ್ಮನ್ನು ಹತ್ತಿರ ತರುತ್ತದೆ",
    until: "ನಮ್ಮ ಹೊಸ ಜೀವನದ ಆರಂಭಕ್ಕೆ",
    days: "ದಿನಗಳು",
    hours: "ಗಂಟೆಗಳು",
    minutes: "ನಿಮಿಷಗಳು",
    seconds: "ಸೆಕೆಂಡುಗಳು",
    married: "ನಮ್ಮ ಹೊಸ ಜೀವನ ಆರಂಭವಾಗಿದೆ. ಸಂಭ್ರಮಿಸೋಣ!",
    celebrate: "ಪ್ರೀತಿ ಮತ್ತು ಸಂಪ್ರದಾಯದ ಸಂಭ್ರಮ",
    eventsEyebrow: "ಎರಡು ದಿನಗಳು. ಜೀವನಪೂರ್ತಿ ನೆನಪುಗಳು.",
    reception: "ಆರತಕ್ಷತೆ",
    muhurtham: "ಮುಹೂರ್ತ",
    receptionDate: "ಶನಿವಾರ, 14 ನವೆಂಬರ್ 2026",
    weddingDate: "ಭಾನುವಾರ, 15 ನವೆಂಬರ್ 2026",
    receptionTime: "ಸಂಜೆ 6:30 ರಿಂದ",
    weddingTime: "ಬೆಳಿಗ್ಗೆ 9:00 ರಿಂದ 9:40 IST",
    receptionText: "ನಗು, ಆತ್ಮೀಯತೆ ಮತ್ತು ಸುಂದರ ಆರಂಭಗಳ ಸಂಜೆಗೆ ಬನ್ನಿ.",
    weddingText: "ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದಗಳ ನಡುವೆ ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ಸಾಕ್ಷಿಯಾಗಿ.",
    calendar: "ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ",
    venueEyebrow: "ನಮ್ಮ ಹೊಸ ಬದುಕಿನ ಆರಂಭ ಇಲ್ಲಿ",
    venueTitle: "ಸುಂದರ ಆರಂಭಗಳಿಗೆ ಒಂದು ಸ್ಥಳ",
    venueName: "ಶ್ರೀ ಗುಡ್ಡದ ಮಲ್ಲೇಶ್ವರ ಸಮುದಾಯ ಭವನ",
    address: "ಮಲ್ಲಾಪುರ, ಭದ್ರಾವತಿ ತಾಲ್ಲೂಕು, ಕರ್ನಾಟಕ.",
    directions: "ದಾರಿ ತೋರಿಸಿ",
    galleryEyebrow: "ಚಿಕ್ಕ ಕ್ಷಣಗಳು, ಅನಂತ ಪ್ರೀತಿ",
    galleryTitle: "ಚಿತ್ರಗಳಲ್ಲಿ ನಮ್ಮ ಕಥೆ",
    photoNote: "ಒಂದು ಸುಂದರ ಕಥೆ ರೂಪುಗೊಳ್ಳುತ್ತಿದೆ.",
    photoSoon: "ನಮ್ಮ ಛಾಯಾಚಿತ್ರಗಳು ಶೀಘ್ರದಲ್ಲೇ",
    share: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ",
    replay: "ಪರಿಚಯವನ್ನು ಮತ್ತೆ ನೋಡಿ",
    music: "ಸಂಗೀತ ಆಲಿಸಿ",
    pause: "ಸಂಗೀತ ನಿಲ್ಲಿಸಿ",
    noMusic: "ನಮ್ಮ ವಿವಾಹದ ಸಂಗೀತ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ.",
    close: "ಮುಚ್ಚಿ",
    top: "ಮೇಲಕ್ಕೆ",
    footer: "ಪ್ರೀತಿಯಿಂದ ಸಿದ್ಧಪಡಿಸಿ, ನಿಮ್ಮೊಂದಿಗೆ ಸಂಭ್ರಮಿಸಲು.",
    menu: "ಮೆನು ತೆರೆಯಿರಿ",
  },
}
export type Language = keyof typeof translations
export type Copy = typeof translations.en

export function calendarHref(reception: boolean) {
  const text = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Golden Mandapa//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${reception ? "reception" : "muhurtham"}-20261115@goldenmandapa`,
    "DTSTAMP:20260101T000000Z",
    `DTSTART:${reception ? "20261114T130000Z" : "20261115T033000Z"}`,
    ...(reception ? [] : ["DTEND:20261115T041000Z"]),
    `SUMMARY:Thejashwini M.H. & Karthik M. — ${reception ? "Reception" : "Muhurtham"
    }`,
    `LOCATION:${venue.replace(/,/g, "\\,")}`,
    `DESCRIPTION:Awaiting Your Gracious Presence.\\n${maps}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n")
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(text)}`
}
