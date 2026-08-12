/**
 * ADITYA & SPANDITA WEDDING INVITATION MAIN APP LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  initInvitationCover();
  initNavbar();
  initHeroSlider();
  initCountdown();
  initScheduleTabs();
  initPhotoGallery();
  initRSVPForm();
  initWishesWall();
  initAudioPlayer();
});

/* --------------------------------------------------------------------------
   1. ROYAL INVITATION COVER OVERLAY
   -------------------------------------------------------------------------- */
function initInvitationCover() {
  const cover = document.getElementById('invitationCover');
  const btnUnseal = document.getElementById('btnUnseal');

  if (btnUnseal && cover) {
    btnUnseal.addEventListener('click', () => {
      cover.classList.add('opened');
      toggleAudio(true);

      // Trigger subtle celebratory petal burst
      if (window.ParticleEngine) {
        // burst effect
      }
    });
  }
}

/* --------------------------------------------------------------------------
   2. NAVBAR CONTROLS
   -------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------
   2. NAVBAR CONTROLS (MOBILE & IPAD SUPPORT)
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileClose = document.getElementById('mobileClose');
  const navLinks = document.getElementById('navLinks');
  const navBackdrop = document.getElementById('navBackdrop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  function openMobileMenu() {
    if (navLinks) navLinks.classList.add('active');
    if (navBackdrop) navBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (navLinks) navLinks.classList.remove('active');
    if (navBackdrop) navBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (navBackdrop) navBackdrop.addEventListener('click', closeMobileMenu);

  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }
}

/* --------------------------------------------------------------------------
   3. HERO SLIDER
   -------------------------------------------------------------------------- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide-img');
  if (slides.length === 0) return;

  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4500);
}

/* --------------------------------------------------------------------------
   4. COUNTDOWN TIMER
   -------------------------------------------------------------------------- */
function initCountdown() {
  // Target: Dec 4, 2026 09:30 AM
  const targetDate = new Date('December 4, 2026 09:30:00').getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
      document.getElementById('cdDays').textContent = '00';
      document.getElementById('cdHours').textContent = '00';
      document.getElementById('cdMins').textContent = '00';
      document.getElementById('cdSecs').textContent = '00';
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('cdDays').textContent = String(days).padStart(2, '0');
    document.getElementById('cdHours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cdMins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cdSecs').textContent = String(secs).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* --------------------------------------------------------------------------
   5. SCHEDULE TABS (DAY 1 vs DAY 2)
   -------------------------------------------------------------------------- */
function initScheduleTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const day1Events = document.getElementById('day1Events');
  const day2Events = document.getElementById('day2Events');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetDay = btn.getAttribute('data-day');
      if (targetDay === 'day1') {
        day1Events.style.display = 'grid';
        day2Events.style.display = 'none';
      } else {
        day1Events.style.display = 'none';
        day2Events.style.display = 'grid';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. PHOTO GALLERY & LIGHTBOX
   -------------------------------------------------------------------------- */
const galleryImages = [
  { src: 'Image_1.jpeg', title: 'Aditya & Spandita', sub: 'Pre-Wedding Moments', category: 'portrait' },
  { src: 'Image_2.jpeg', title: 'Eternal Bond', sub: 'Celebration of Love', category: 'portrait' },
  { src: 'Image_3.jpeg', title: 'Aditya & Spandita', sub: 'Joyful Radiance', category: 'moments' },
  { src: 'Image_4.jpeg', title: 'Aditya & Spandita', sub: 'Sunset Romance', category: 'moments' },
  { src: 'Image_5.jpeg', title: 'The Royal Couple', sub: 'Elegance & Harmony', category: 'portrait' },
  { src: 'Image_6.jpeg', title: 'Golden Memories', sub: 'Forever Begins Now', category: 'haldi' },
  { src: 'Image_7.jpeg', title: 'Togetherness', sub: 'Cherished Smiles', category: 'moments' },
  { src: 'Image_8.jpeg', title: 'The Groom & Bride', sub: 'A Journey of Two Hearts', category: 'portrait' },
  { src: 'Image_9.jpeg', title: 'Celebration of Togetherness', sub: 'Traditional Splendor', category: 'haldi' },
  { src: 'Image_10.jpeg', title: 'Aditya & Spandita', sub: 'Graceful Portrayal', category: 'portrait' },
  { src: 'Image_11.jpeg', title: 'The Wedding Canvas', sub: 'Love, Laughter & Happy Ever After', category: 'moments' }
];

let currentLightboxIndex = 0;

function initPhotoGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  function renderGallery(filter = 'all') {
    galleryGrid.innerHTML = '';
    galleryImages.forEach((img, index) => {
      if (filter !== 'all' && img.category !== filter) return;

      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.innerHTML = `
        <img src="${img.src}" alt="${img.title}" class="gallery-img" loading="lazy">
        <div class="gallery-overlay">
          <h4 class="gallery-caption-title">${img.title}</h4>
          <p class="gallery-caption-sub">${img.sub}</p>
        </div>
      `;

      item.addEventListener('click', () => openLightbox(index));
      galleryGrid.appendChild(item);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.getAttribute('data-filter'));
    });
  });

  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const item = galleryImages[currentLightboxIndex];
    lightboxImg.src = item.src;
    lightboxCaption.textContent = `${item.title} — ${item.sub}`;
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
  });
  lightboxNext.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
    updateLightbox();
  });

  // Touch Swipe Handler for Mobile & iPad Lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      lightboxNext.click(); // Swipe Left -> Next photo
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      lightboxPrev.click(); // Swipe Right -> Prev photo
    }
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev.click();
    if (e.key === 'ArrowRight') lightboxNext.click();
  });

  renderGallery('all');
}

/* --------------------------------------------------------------------------
   7. RSVP FORM & GOOGLE SHEETS INTEGRATION
   -------------------------------------------------------------------------- */

// GOOGLE APPS SCRIPT WEB APP ENDPOINT FOR RSVPS
const GOOGLE_SHEET_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwHsXr5ZB8GGfDH5OjHku-X9YMQPHsjfLmMmKaRIsSltNhXHC0TriYpVMSmd2l5tMO8ww/exec';

// Secret passphrase to prevent unauthorized form spam
const RSVP_SECRET = 'AdityaSpandita2026';

function initRSVPForm() {
  const form = document.getElementById('rsvpForm');
  const successMsg = document.getElementById('rsvpSuccess');
  const submitBtn = form ? form.querySelector('button[type="submit"]') : null;

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('rsvpName').value;
    const email = document.getElementById('rsvpEmail').value;
    const count = document.getElementById('rsvpGuests').value;
    const wish = document.getElementById('rsvpWish').value;

    // Collect selected events
    const selectedEvents = Array.from(form.querySelectorAll('input[name="events"]:checked'))
      .map(cb => cb.value)
      .join(', ');

    const timestamp = new Date().toLocaleString();

    const rsvpData = {
      name,
      email,
      count,
      events: selectedEvents || 'None',
      wish,
      timestamp
    };

    // Show loading state on button
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
    }

    // 1. Send to Google Sheets if Web App URL is provided
    if (GOOGLE_SHEET_WEB_APP_URL && GOOGLE_SHEET_WEB_APP_URL.trim() !== '') {
      try {
        const formData = new FormData();
        formData.append('secret', RSVP_SECRET); // Anti-spam passphrase check
        formData.append('timestamp', timestamp);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('count', count);
        formData.append('events', selectedEvents || 'None');
        formData.append('wish', wish);

        await fetch(GOOGLE_SHEET_WEB_APP_URL, {
          method: 'POST',
          mode: 'no-cors', // Required for Google Apps Script Web Apps
          body: formData
        });
      } catch (err) {
        console.warn('Google Sheet submission warning:', err);
      }
    }

    // 2. Save to LocalStorage as fallback
    const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    existing.push(rsvpData);
    localStorage.setItem('wedding_rsvps', JSON.stringify(existing));

    // 3. Post wish to Wishes Wall if provided
    if (wish.trim()) {
      addWishToWall(name, wish);
    }

    // Display confirmation
    form.reset();
    form.style.display = 'none';
    if (successMsg) successMsg.style.display = 'block';
  });
}

/* --------------------------------------------------------------------------
   8. WISHES WALL
   -------------------------------------------------------------------------- */
const initialWishes = [
  { name: 'Rajesh & Meera Sharma', wish: 'Wishing Aditya & Spandita a lifetime of happiness, laughter, and endless love!' },
  { name: 'Ananya & Vikram', wish: 'So thrilled to celebrate your special day. May your bond grow stronger with each passing day!' },
  { name: 'Kavita Chawla', wish: 'Warmest blessings on your wedding! Looking forward to the Haldi and Grand Reception.' }
];

function initWishesWall() {
  const wishesGrid = document.getElementById('wishesGrid');
  if (!wishesGrid) return;

  const storedWishes = JSON.parse(localStorage.getItem('wedding_wishes') || '[]');
  const allWishes = [...initialWishes, ...storedWishes];

  wishesGrid.innerHTML = '';
  allWishes.forEach(item => {
    const card = document.createElement('div');
    card.className = 'wish-card';
    card.innerHTML = `
      <p class="wish-text">${item.wish}</p>
      <div class="wish-author">— ${item.name}</div>
    `;
    wishesGrid.appendChild(card);
  });
}

function addWishToWall(name, wish) {
  const storedWishes = JSON.parse(localStorage.getItem('wedding_wishes') || '[]');
  storedWishes.push({ name, wish });
  localStorage.setItem('wedding_wishes', JSON.stringify(storedWishes));
  initWishesWall();
}

/* --------------------------------------------------------------------------
   9. WEB AUDIO API SYNTHESIZED AMBIENT WEDDING MUSIC
   -------------------------------------------------------------------------- */
let audioCtx = null;
let isAudioPlaying = false;
let synthTimer = null;

function initAudioPlayer() {
  const audioToggle = document.getElementById('audioToggle');
  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      toggleAudio();
    });
  }
}

function toggleAudio(forcePlay = false) {
  const widget = document.getElementById('audioWidget');
  const icon = document.getElementById('audioIcon');

  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  if (forcePlay || !isAudioPlaying) {
    isAudioPlaying = true;
    if (widget) widget.classList.add('playing');
    if (icon) icon.className = 'fa-solid fa-volume-high';
    startIndianFluteSynth();
  } else {
    isAudioPlaying = false;
    if (widget) widget.classList.remove('playing');
    if (icon) icon.className = 'fa-solid fa-volume-xmark';
    stopIndianFluteSynth();
  }
}

// Pentatonic / Raga Shivaranjani notes (Frequency in Hz)
const ragaNotes = [293.66, 329.63, 349.23, 440.00, 493.88, 587.33, 659.25, 698.46];

function playFluteNote(freq, duration) {
  if (!audioCtx || !isAudioPlaying) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

  // Soft envelope for flute effect
  gain.gain.setValueAtTime(0, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 0.3);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function startIndianFluteSynth() {
  if (synthTimer) clearInterval(synthTimer);

  let noteIndex = 0;
  synthTimer = setInterval(() => {
    if (!isAudioPlaying) return;
    const freq = ragaNotes[noteIndex % ragaNotes.length];
    playFluteNote(freq, 2.5);
    noteIndex = (noteIndex + Math.floor(Math.random() * 3) + 1) % ragaNotes.length;
  }, 1600);
}

function stopIndianFluteSynth() {
  if (synthTimer) {
    clearInterval(synthTimer);
    synthTimer = null;
  }
}

/* --------------------------------------------------------------------------
   CALENDAR GENERATOR (.ics file)
   -------------------------------------------------------------------------- */
function downloadCalendarEvent() {
  const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Aditya and Spandita Wedding//EN
BEGIN:VEVENT
UID:wedding-aditya-spandita-2026
DTSTAMP:20261204T093000Z
DTSTART:20261204T040000Z
DTEND:20261205T180000Z
SUMMARY:Aditya & Spandita Wedding Celebrations
DESCRIPTION:Haldi, Engagement, Baraat, Wedding Ceremony & Grand Reception
LOCATION:The Grand Palace, New Delhi / Royal Gardens
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Aditya_Spandita_Wedding.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

window.downloadCalendarEvent = downloadCalendarEvent;
