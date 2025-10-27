// -------- LIGHTBOX FUNCTIONALITY --------
const images = document.querySelectorAll('.imgs');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
  });
});

function showImage() {
  lightboxImg.src = images[currentIndex].src;
  lightbox.style.display = 'flex';
}

// Next / Prev buttons
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

// Click outside image to close
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// -------- DARK MODE FUNCTIONALITY --------
const modeToggle = document.getElementById('modeToggle');
const boundary = document.getElementById('boundary');
let darkMode = false;

modeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  boundary.classList.toggle('dark-mode', darkMode);
  modeToggle.textContent = darkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// -------- FILTER FUNCTIONALITY --------
const filterSelect = document.getElementById('filterSelect');

filterSelect.addEventListener('change', () => {
  const selected = filterSelect.value;

  images.forEach((img) => {
    const region = img.getAttribute('data-region');
    if (selected === 'all' || region === selected) {
      img.style.display = 'inline';
    } else {
      img.style.display = 'none';
    }
  });
});
