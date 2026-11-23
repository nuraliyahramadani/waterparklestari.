// Waterpark Lestari - Interactive Logic & 360 Viewer

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  initPanoramas();
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Navbar scroll background effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 30) {
      navbar.classList.add('shadow-xl', 'bg-[#051d22]/95');
      navbar.classList.remove('bg-[#06242a]/90');
    } else {
      navbar.classList.remove('shadow-xl', 'bg-[#051d22]/95');
      navbar.classList.add('bg-[#06242a]/90');
    }
  }
});

// Teleport 360 Panorama URLs & Local Images
const localDepanImage = "assets/panoramas/depan_360.jpg";
const remoteDepanImage = "https://hdreye-prod.s3.amazonaws.com/file/faf8aa9d-55b3-427c-a698-8ca7bd778c79/8a4a904e-4e41-49f2-bd6d-ff45f9b7b0a6.jpg";
const depanPanoramaImage = window.location.protocol === 'file:' ? remoteDepanImage : localDepanImage;

const localKananImage = "assets/panoramas/kanan_360.jpg";
const remoteKananImage = "https://hdreye-prod.s3.amazonaws.com/file/4d092738-8f6e-4327-8bc9-05b7eb499b5c/23523469-2724-4be0-9e11-01bedaf07b34.jpg";
const kananPanoramaImage = window.location.protocol === 'file:' ? remoteKananImage : localKananImage;

const localKiriImage = "assets/panoramas/kiri_360.jpg";
const remoteKiriImage = "https://hdreye-prod.s3.amazonaws.com/file/2a602e7b-904f-4abe-9a1d-368b1bec8c06/170be750-7642-4d07-b72d-770355d208a3.jpg";
const kiriPanoramaImage = window.location.protocol === 'file:' ? remoteKiriImage : localKiriImage;

const localGazeboImage = "assets/panoramas/gazebo_360.jpg";
const remoteGazeboImage = "https://hdreye-prod.s3.amazonaws.com/file/c0d08654-7ad9-4477-9abb-02dd615d06d5/45163b52-ed78-4e22-ae3c-9b08d2f4df5d.jpg";
const gazeboPanoramaImage = window.location.protocol === 'file:' ? remoteGazeboImage : localGazeboImage;

const localTengahImage = "assets/panoramas/tengah_360.jpg";
const remoteTengahImage = "https://hdreye-prod.s3.amazonaws.com/file/2972fb13-b65c-43e8-a984-c031bd5f0874/17ed9666-7b1e-4a08-9a4d-770370f7fc1c.jpg";
const tengahPanoramaImage = window.location.protocol === 'file:' ? remoteTengahImage : localTengahImage;

const localParkiranImage = "assets/panoramas/parkiran_360.jpg";
const remoteParkiranImage = "https://hdreye-prod.s3.amazonaws.com/file/7b23918c-6555-4f20-9380-b5f952959528/7929f3b3-05fd-463e-9131-429c0fe783b6.jpg";
const parkiranPanoramaImage = window.location.protocol === 'file:' ? remoteParkiranImage : localParkiranImage;

// 360 Panorama Scenes Data
const panoramaScenes = [
  {
    title: "1. Area Depan & Gerbang Utama (Teleport 360°)",
    subtitle: "Foto 360° asli lokasi Waterpark Lestari Tomoni (Koordinat -2.522109, 120.814861)",
    image: depanPanoramaImage,
    thumbnail: "assets/panoramas/depan_thumb.jpg",
    pitch: 0,
    yaw: 0,
    hfov: 105,
    teleportUrl: "https://www.teleport360.app/share/28056cba-1013-4b6d-b3f3-e78154489f79",
    hotSpots: [
      {
        pitch: -2,
        yaw: 15,
        type: "info",
        text: "Pintu Masuk Utama & Area Parkir Depan"
      },
      {
        pitch: 5,
        yaw: -45,
        type: "info",
        text: "Akses Menuju Loket & Area Kolam Renang"
      }
    ]
  },
  {
    title: "2. Area Kanan Kolam (Teleport 360°)",
    subtitle: "Pemandangan 360° nyata sisi kanan kolam renang Waterpark Lestari Tomoni",
    image: kananPanoramaImage,
    thumbnail: "assets/panoramas/kanan_thumb.jpg",
    pitch: 0,
    yaw: 0,
    hfov: 105,
    teleportUrl: "https://www.teleport360.app/share/3edf1cbd-c0ce-4621-9b14-d2bdc9b22fec",
    hotSpots: [
      {
        pitch: -3,
        yaw: 20,
        type: "info",
        text: "Sisi Kanan Kolam Renang & Area Bilas"
      },
      {
        pitch: 2,
        yaw: -70,
        type: "info",
        text: "Jalur Penghubung Menuju Gazebo & Wahana"
      }
    ]
  },
  {
    title: "3. Area Kiri Kolam (Teleport 360°)",
    subtitle: "Pemandangan 360° nyata sisi kiri kolam renang Waterpark Lestari Tomoni",
    image: kiriPanoramaImage,
    thumbnail: "assets/panoramas/kiri_thumb.jpg",
    pitch: 0,
    yaw: 0,
    hfov: 105,
    teleportUrl: "https://www.teleport360.app/share/b471f91c-40bc-4a3f-b23d-e96b6b5f0c35",
    hotSpots: [
      {
        pitch: -3,
        yaw: -15,
        type: "info",
        text: "Sisi Kiri Kolam Renang & Area Gazebo"
      },
      {
        pitch: 2,
        yaw: 60,
        type: "info",
        text: "Jalur Menuju Kolam Anak & Seluncuran"
      }
    ]
  },
  {
    title: "4. Area Gazebo dan Kolam Anak (Teleport 360°)",
    subtitle: "Pemandangan 360° nyata area gazebo santai keluarga dan kolam anak",
    image: gazeboPanoramaImage,
    thumbnail: "assets/panoramas/gazebo_thumb.jpg",
    pitch: 0,
    yaw: 0,
    hfov: 105,
    teleportUrl: "https://www.teleport360.app/share/f7839617-8a16-4d1b-9bbe-8988597de078",
    hotSpots: [
      {
        pitch: -2,
        yaw: 10,
        type: "info",
        text: "Pondok Gazebo Santai Keluarga"
      },
      {
        pitch: -4,
        yaw: -80,
        type: "info",
        text: "Kolam Anak Ramah Balita & Ember Tumpah"
      }
    ]
  },
  {
    title: "5. Area Tengah dan Kolam Anak (Teleport 360°)",
    subtitle: "Pemandangan 360° nyata area tengah wahana dan kolam anak Waterpark Lestari Tomoni",
    image: tengahPanoramaImage,
    thumbnail: "assets/panoramas/tengah_thumb.jpg",
    pitch: 0,
    yaw: 0,
    hfov: 105,
    teleportUrl: "https://www.teleport360.app/share/d9600f78-f8d8-448e-9611-d5b03789684c",
    hotSpots: [
      {
        pitch: -3,
        yaw: 15,
        type: "info",
        text: "Pusat Kolam Anak & Permainan Air"
      },
      {
        pitch: 0,
        yaw: -60,
        type: "info",
        text: "Area Santai Tengah & Akses Seluncuran"
      }
    ]
  },
  {
    title: "6. Area Parkiran (Teleport 360°)",
    subtitle: "Pemandangan 360° nyata area parkir luas kendaraan pengunjung Waterpark Lestari Tomoni",
    image: parkiranPanoramaImage,
    thumbnail: "assets/panoramas/parkiran_thumb.jpg",
    pitch: 0,
    yaw: 0,
    hfov: 105,
    teleportUrl: "https://www.teleport360.app/share/37b4d88c-9c97-45a6-bb33-9916116e04b3",
    hotSpots: [
      {
        pitch: -2,
        yaw: 20,
        type: "info",
        text: "Area Parkir Motor & Mobil Pengunjung"
      },
      {
        pitch: 4,
        yaw: -50,
        type: "info",
        text: "Pintu Masuk Menuju Loket Tiket"
      }
    ]
  }
];

let embeddedViewer = null;
let modalViewer = null;
let currentSceneIndex = 0;

// Initialize Panoramas
function initPanoramas() {
  if (typeof pannellum === 'undefined') {
    console.warn("Pannellum is loading or unavailable, will fallback to canvas/image.");
    return;
  }

  // Init Embedded Panorama
  try {
    embeddedViewer = pannellum.viewer('embeddedPanorama', {
      type: 'equirectangular',
      panorama: panoramaScenes[0].image,
      autoLoad: true,
      autoRotate: -2,
      compass: false,
      showControls: true,
      hfov: panoramaScenes[0].hfov,
      pitch: panoramaScenes[0].pitch,
      yaw: panoramaScenes[0].yaw,
      hotSpots: panoramaScenes[0].hotSpots
    });
  } catch (e) {
    console.error("Embedded panorama init error:", e);
  }
}

// Switch Embedded Panorama Scene
function switchEmbeddedScene(index) {
  if (!panoramaScenes[index]) return;

  const buttons = document.querySelectorAll('.scene-tab-btn');
  buttons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add('active', 'bg-amber-500', 'text-slate-950');
      btn.classList.remove('bg-teal-900/60', 'text-slate-300');
    } else {
      btn.classList.remove('active', 'bg-amber-500', 'text-slate-950');
      btn.classList.add('bg-teal-900/60', 'text-slate-300');
    }
  });

  if (embeddedViewer && typeof embeddedViewer.loadScene === 'function') {
    // If multiscene configured, or reinit
  }
  
  // Clean reload panorama image
  try {
    const el = document.getElementById('embeddedPanorama');
    if (el) {
      el.innerHTML = '';
      embeddedViewer = pannellum.viewer('embeddedPanorama', {
        type: 'equirectangular',
        panorama: panoramaScenes[index].image,
        autoLoad: true,
        autoRotate: -2,
        compass: false,
        showControls: true,
        hfov: panoramaScenes[index].hfov,
        pitch: panoramaScenes[index].pitch,
        yaw: panoramaScenes[index].yaw,
        hotSpots: panoramaScenes[index].hotSpots
      });
    }
  } catch (err) {
    console.error("Error switching scene:", err);
  }
}

// Fullscreen Embedded Viewer
function fullscreenEmbedded() {
  const elem = document.getElementById('embeddedPanorama');
  if (elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }
}

// Open Virtual Tour Modal
function openVirtualTourModal(sceneIdx = 0) {
  const modal = document.getElementById('virtualTourModal');
  if (!modal) return;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  loadModalScene(sceneIdx);
}

// Close Virtual Tour Modal
function closeVirtualTourModal() {
  const modal = document.getElementById('virtualTourModal');
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';

  // Stop rotation
  try {
    const modalPanoEl = document.getElementById('modalPanorama');
    if (modalPanoEl) modalPanoEl.innerHTML = '';
  } catch (e) {}
}

// Load Scene into Modal Viewer
function loadModalScene(sceneIdx) {
  currentSceneIndex = sceneIdx;
  const scene = panoramaScenes[sceneIdx];
  if (!scene) return;

  // Update modal header info
  const titleEl = document.getElementById('modalSceneTitle');
  const subEl = document.getElementById('modalSceneSubtitle');
  if (titleEl) titleEl.innerText = scene.title;
  if (subEl) subEl.innerText = scene.subtitle;

  // Update active buttons in modal footer
  const modalButtons = document.querySelectorAll('.modal-tab-btn');
  modalButtons.forEach((btn, i) => {
    if (i === sceneIdx) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Re-render modal pannellum
  try {
    const modalPanoEl = document.getElementById('modalPanorama');
    if (modalPanoEl) {
      modalPanoEl.innerHTML = '';
      modalViewer = pannellum.viewer('modalPanorama', {
        type: 'equirectangular',
        panorama: scene.image,
        autoLoad: true,
        autoRotate: -1.5,
        compass: true,
        showControls: true,
        hfov: scene.hfov,
        pitch: scene.pitch,
        yaw: scene.yaw,
        hotSpots: scene.hotSpots
      });
    }
  } catch (err) {
    console.error("Modal panorama error:", err);
  }
}

// Photo Viewer Modal
function openPhotoViewer(imgSrc) {
  const modal = document.getElementById('photoModal');
  const img = document.getElementById('photoModalImg');
  if (modal && img) {
    img.src = imgSrc;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closePhotoViewer() {
  const modal = document.getElementById('photoModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// ================= BOOKING TICKET MODAL & LOGIC =================
let bookingState = {
  dewasa: 1,
  anak: 0,
  isWeekend: false
};

function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  const dateInput = document.getElementById('bookDate');
  if (!modal) return;

  const today = new Date().toISOString().split('T')[0];
  if (dateInput && !dateInput.value) {
    dateInput.value = today;
    dateInput.min = today;
  }

  calculateBookingTotal();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function adjustCount(type, delta) {
  if (type === 'dewasa') {
    bookingState.dewasa = Math.max(0, bookingState.dewasa + delta);
    if (bookingState.dewasa === 0 && bookingState.anak === 0) bookingState.dewasa = 1;
    const el = document.getElementById('dewasaCount');
    if (el) el.innerText = bookingState.dewasa;
  } else if (type === 'anak') {
    bookingState.anak = Math.max(0, bookingState.anak + delta);
    const el = document.getElementById('anakCount');
    if (el) el.innerText = bookingState.anak;
  }
  calculateBookingTotal();
}

function calculateBookingTotal() {
  const dateInput = document.getElementById('bookDate');
  const dayIndicator = document.getElementById('dayTypeIndicator');
  const dewasaLabel = document.getElementById('dewasaPriceLabel');
  const anakLabel = document.getElementById('anakPriceLabel');
  const totalLabel = document.getElementById('totalBookingPrice');

  let isWeekend = false;
  if (dateInput && dateInput.value) {
    const selectedDate = new Date(dateInput.value);
    const day = selectedDate.getDay();
    // 0 is Sunday, 6 is Saturday
    isWeekend = (day === 0 || day === 6);
  }
  bookingState.isWeekend = isWeekend;

  const dewasaRate = isWeekend ? 35000 : 30000;
  const anakRate = isWeekend ? 30000 : 25000;

  if (dayIndicator) {
    dayIndicator.innerText = isWeekend 
      ? "★ Akhir Pekan (Weekend): Wahana beroperasi maksimal" 
      : "✓ Hari Kerja (Weekday): Suasana lebih santai & nyaman";
  }

  if (dewasaLabel) dewasaLabel.innerText = "Rp" + dewasaRate.toLocaleString('id-ID') + " / org";
  if (anakLabel) anakLabel.innerText = "Rp" + anakRate.toLocaleString('id-ID') + " / org";

  const total = (bookingState.dewasa * dewasaRate) + (bookingState.anak * anakRate);
  if (totalLabel) totalLabel.innerText = "Rp" + total.toLocaleString('id-ID');
}

function submitBooking(event) {
  event.preventDefault();
  const name = document.getElementById('bookName').value;
  const phone = document.getElementById('bookPhone').value;
  const date = document.getElementById('bookDate').value;
  const total = document.getElementById('totalBookingPrice').innerText;
  const dayType = bookingState.isWeekend ? "Weekend" : "Weekday";

  const message = `Halo Pengelola Waterpark Lestari Tomoni,%0A%0ASaya ingin memesan tiket masuk:%0A- Nama: ${encodeURIComponent(name)}%0A- No. WhatsApp: ${encodeURIComponent(phone)}%0A- Tanggal Kunjungan: ${encodeURIComponent(date)} (${dayType})%0A- Dewasa: ${bookingState.dewasa} orang%0A- Anak-Anak: ${bookingState.anak} orang%0A- Estimasi Total: ${encodeURIComponent(total)}%0A%0AMohon konfirmasi pemesanan saya. Terima kasih!`;

  window.open(`https://wa.me/6281347678886?text=${message}`, '_blank');
  closeBookingModal();
}

// ================= AMBIENT WATER SOUND GENERATOR (WEB AUDIO API) =================
let audioCtx = null;
let noiseNode = null;
let filterNode = null;
let gainNode = null;
let isAudioPlaying = false;

function toggleAmbientSound() {
  const soundIcon = document.getElementById('soundIcon');
  const soundBtn = document.getElementById('ambientSoundBtn');

  if (!isAudioPlaying) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      // Synthesize pink/water noise buffer
      const bufferSize = audioCtx.sampleRate * 2;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.1;
      }

      noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = noiseBuffer;
      noiseNode.loop = true;

      // Bandpass filter to simulate gentle water splashes
      filterNode = audioCtx.createBiquadFilter();
      filterNode.type = 'lowpass';
      filterNode.frequency.setValueAtTime(450, audioCtx.currentTime);

      // Volume Gain
      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.18, audioCtx.currentTime);

      noiseNode.connect(filterNode);
      filterNode.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      noiseNode.start();
      isAudioPlaying = true;

      if (soundBtn) soundBtn.classList.add('bg-amber-500', 'text-slate-950');
      if (soundIcon) {
        soundIcon.setAttribute('data-lucide', 'volume-2');
        if (window.lucide) lucide.createIcons();
      }
    } catch (err) {
      console.warn("Web Audio API not supported or blocked:", err);
    }
  } else {
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
    isAudioPlaying = false;

    if (soundBtn) soundBtn.classList.remove('bg-amber-500', 'text-slate-950');
    if (soundIcon) {
      soundIcon.setAttribute('data-lucide', 'volume-x');
      if (window.lucide) lucide.createIcons();
    }
  }
}

// ESC key to close any modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVirtualTourModal();
    closePhotoViewer();
    closeBookingModal();
  }
});
