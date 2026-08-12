# Implementation Plan - Aditya & Spandita Wedding Invitation Website

Design and build a luxury, state-of-the-art interactive wedding invitation website for **Aditya & Spandita**. The website will feature custom Indian wedding themes, interactive invitation opening card, event timeline schedule, countdown timer, interactive photo gallery of all 11 couple images, RSVP form, guest wishes wall, venue directions, and ambient audio with floating floral animations.

## User Review Required

> [!IMPORTANT]
> **Workspace Images**: The folder `/Users/gowthambodduluri/Aditya_Wedding_Invitation` contains 11 couple photos (`Image_1.jpeg` through `Image_11.jpeg`). All 11 images will be integrated into the hero section, couple spotlight, event timeline cards, and the interactive photo gallery with full-screen lightbox viewing.

> [!NOTE]
> **Event Timings & Ready Times**:
> - **4th Dec Morning - Haldi**: Ready by 9:30 AM | Event 9:30 AM – 10:00 AM
> - **4th Dec Evening - Engagement**: Ready by 4:00 PM | Event Starts 4:30 PM
> - **5th Dec Morning - Baraat & Wedding**: Groom ready by 9:45–10:00 AM | Baraat at 10:30 AM | Bride ready by 10:30–10:45 AM | Bride entry & photoshoot at 11:30 AM
> - **5th Dec Evening - Reception**: Ready by 7:30 PM (Pre-reception Photoshoot) | Reception Starts 8:00 PM

---

## Proposed Architectural & Design Elements

### Key Components

#### 1. Interactive Royal Invitation Cover (Opening Overlay)
- Premium royal envelope with wax seal, ribbon, and embossed gold typography: *"You are cordially invited to celebrate the wedding of Aditya & Spandita"*.
- Smooth unfold/open animation upon user interaction, playing gentle background ambient music and revealing the full experience.

#### 2. Hero Header & Live Countdown Timer
- Dynamic slideshow / parallax background featuring high-res couple images (`Image_1.jpeg`, `Image_2.jpeg`, etc.).
- Luxury typography combining *Cinzel*, *Cormorant Garamond*, and *Great Vibes*.
- Live countdown ticker (Days : Hours : Minutes : Seconds) to 4th December 2026.
- Interactive "Save the Date" button with `.ics` calendar file download & Google Calendar link generation.

#### 3. The Couple Spotlight (Aditya & Spandita)
- Dedicated profile cards for Groom (Aditya) and Bride (Spandita).
- Highlighting their story, family background, and photos from `Image_3.jpeg` and `Image_4.jpeg`.

#### 4. Interactive Event Schedule (Vivah Utsav Timeline)
- Filter tabs by date: **Day 1: Dec 4, 2026** and **Day 2: Dec 5, 2026**.
- Detailed event cards with specific badges:
  - **Haldi**: 9:30 AM ready time, 9:30-10:00 AM event start, Marigold theme.
  - **Engagement**: 4:00 PM ready time, 4:30 PM start, Emerald & Gold evening theme.
  - **Baraat & Wedding**: Staggered schedule (9:45 AM Groom ready, 10:30 AM Baraat, 10:30 AM Bride ready, 11:30 AM Bride entry & photo session), Crimson Royal theme.
  - **Reception**: 7:30 PM photoshoot & ready time, 8:00 PM Grand Gala start, Midnight Velvet theme.
- Each event includes venue address, interactive Google Maps button, photo session notes, and calendar add buttons.

#### 5. Couple Photo Gallery & Lightbox Viewer
- Responsive grid showcasing all 11 photos (`Image_1.jpeg` to `Image_11.jpeg`).
- Filter tabs: *All*, *Haldi & Pre-wedding*, *Portraits*, *Moments*.
- Lightbox popup with high-res zoom, caption overlay, image navigation (Previous / Next), keyboard shortcuts, and touch swipe support.

#### 6. RSVP & Wishes Wall
- Glassmorphic modal form with fields for Guest Name, Email, Attendance status, Events attending checkboxes, Guest count, Dietary notes, and Wishes.
- Instant submission notification with rose petal confetti burst and storage in `localStorage`.
- Live Wishes Wall where guests can read warm blessings and post their own note for Aditya & Spandita.

#### 7. Floating Controls & Ambient Effects
- Floating audio toggle for background shehnai/flute audio with visualizer animation.
- HTML5 Canvas background particle system (floating rose petals & golden dust sparkles).
- Quick navigation bar to jump directly to Schedule, Gallery, Venue, and RSVP.

---

## File Structure

```
Aditya_Wedding_Invitation/
├── index.html            # Main semantic HTML structure
├── css/
│   └── style.css         # Complete design system, gold themes, animations & responsive layout
├── js/
│   ├── app.js            # Core UI logic, countdown, audio, lightbox, schedule tabs & RSVP
│   └── particles.js      # Floating floral rose petal & gold dust canvas engine
├── audio/
│   └── wedding_music.mp3 # High quality ambient shehnai/flute soundtrack (generated synth/audio)
└── Image_1.jpeg ... Image_11.jpeg # Workspace couple images
```

---

## Verification Plan

### Automated / Local Verification
1. Launch local web server using `python3 -m http.server 8080`.
2. Open local preview in browser to test all interactive features.

### Manual Verification
- Test opening cover envelope animation and ambient music playback.
- Verify countdown timer calculation and display accuracy for Dec 4, 2026.
- Check event timeline schedule tabs (Dec 4 & Dec 5) to confirm all ready times, start times, photoshoot notes, and dress codes are exact.
- Test photo gallery grid and lightbox viewer for all 11 images (`Image_1.jpeg` to `Image_11.jpeg`).
- Submit RSVP form and verify success modal, confetti effect, and local storage retention.
- Post a blessing on the Wishes Wall and confirm real-time display.
- Verify responsive layout on mobile screen viewports.
