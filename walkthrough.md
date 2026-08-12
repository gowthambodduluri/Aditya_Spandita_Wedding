# Walkthrough - Aditya & Spandita Wedding Invitation Website

We have successfully designed and built a luxury interactive wedding invitation website for **Aditya & Spandita**.

---

## Key Features & Highlights

### 1. Royal Unseal Overlay (Interactive Invitation Cover)
- High-class burgundy & gold glassmorphic card with Ganesha motif and metallic gold typography.
- "Unseal Invitation" button smoothly hides the cover, launches background particle effects, and activates the synthesized ambient flute music.

### 2. Live Countdown & Save The Date
- Real-time countdown clock (Days, Hours, Minutes, Seconds) targeting **December 4th, 2026, at 09:30 AM**.
- **Save to Calendar** button that generates an instant `.ics` calendar file download (`Aditya_Spandita_Wedding.ics`).

### 3. The Couple Spotlight
- Portrait spotlight cards for **Aditya (The Groom)** and **Spandita (The Bride)** utilizing workspace photos (`Image_3.jpeg` and `Image_4.jpeg`) with romantic heart pulse animation.

### 4. Interactive Celebration Schedule (Vivah Utsav)
Tabbed day-by-day interactive timeline (Day 1: Dec 4, Day 2: Dec 5) with custom theme badges and exact timeline details:

- **4th December – Morning (Haldi)**:
  - Ready Time: Both Bride & Groom ready by 9:30 AM
  - Event Start: 9:30 AM – 10:00 AM
  - Attire Callout: Yellow & Floral attire recommended
- **4th December – Evening (Engagement)**:
  - Ready Time: Both Bride & Groom ready by 4:00 PM (Pre-engagement photoshoot)
  - Event Start: 4:30 PM Onwards
- **5th December – Morning (Baraat & Vivah)**:
  - Groom Ready: 9:45 AM – 10:00 AM
  - Baraat Assembly: 10:30 AM
  - Bride Ready: 10:30 AM – 10:45 AM
  - Bride Entry & Varmala: 11:30 AM (giving ample pre-entry photo time)
- **5th December – Evening (Reception)**:
  - Ready Time: Both Bride & Groom ready by 7:30 PM (Pre-reception photos)
  - Reception Start: 8:00 PM Onwards

### 5. Couple Photo Gallery & Lightbox Viewer
- Includes all **11 workspace images** (`Image_1.jpeg` through `Image_11.jpeg`).
- Filter bar (*All Photos*, *Portraits*, *Moments*, *Celebrations*).
- Interactive fullscreen Lightbox viewer with Next / Previous navigation, keyboard arrow controls, and close handler.

### 6. Interactive RSVP & Wishes Wall
- Form fields for Guest Name, Email / Phone, Guests Count, Attending Event Checkboxes, and Personal Wishes.
- Instant submission confirmation with local storage saving (`localStorage`).
- Dynamic **Wishes Wall** displaying guest blessings in real time.

### 7. Ambient Music Synthesizer & Floating Canvas Petals
- Built-in Web Audio API Synthesizer playing a soothing Indian Raga flute melody (Raga Shivaranjani notes) with animated equalizer bars.
- 2D Canvas engine generating falling rose petals, marigold petals, and glowing gold dust particles.

---

## File Structure

- [index.html](file:///Users/gowthambodduluri/Aditya_Wedding_Invitation/index.html): Master HTML5 structure with semantic components and meta tags.
- [css/style.css](file:///Users/gowthambodduluri/Aditya_Wedding_Invitation/css/style.css): Complete luxury design system, responsive media queries, and animations.
- [js/app.js](file:///Users/gowthambodduluri/Aditya_Wedding_Invitation/js/app.js): Application logic for countdown, lightbox, RSVP, schedule tabs, and Web Audio API synthesizer.
- [js/particles.js](file:///Users/gowthambodduluri/Aditya_Wedding_Invitation/js/particles.js): Canvas particle engine for floating floral animation.
- [serve.py](file:///Users/gowthambodduluri/Aditya_Wedding_Invitation/serve.py): Python HTTP server helper script.

---

## Verification
- Clean structure validated with semantic HTML5 elements.
- Local static file serving setup at `http://localhost:8080/`.
- All 11 images verified and mapped to gallery items.
