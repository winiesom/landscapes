let testimonials = [];
// starting point for the current testimonial index
let currentIndex = 0;

// Function to display the current testimonial
function displayTestimonial(index) {
  const t = testimonials[index];
  document.getElementById('testimonial-text').textContent = `"${t.body}`;
  document.getElementById('testimonial-author').textContent = t.name;
  document.getElementById('testimonial-email').textContent = `From: ${t.email}`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  displayTestimonial(currentIndex);
}

function showPrevious() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  displayTestimonial(currentIndex);
}

async function initTestimonials() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments?_limit=5'
    );

    if (!response.ok) throw new Error('Failed to fetch testimonials');

    testimonials = await response.json(); // save the fetched data
    displayTestimonial(currentIndex);
  } catch (error) {
    document.getElementById(
      'testimonials'
    ).innerHTML = `<p style="color:red;">Error loading testimonials: ${error.message}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', initTestimonials);

function saveFavourite() {
  const selected = document.getElementById('favourite-location').value;
  if (selected) {
    localStorage.setItem('favouritePlace', selected);
    showFavourite();
  }
}

function showFavourite() {
  const saved = localStorage.getItem('favouritePlace');
  const message = document.getElementById('favourite-message');
  if (saved) {
    message.textContent = ` Your favourtite place is ${saved}`;
  } else {
    message.textContent = '';
  }
}

document.addEventListener('DOMContentLoaded', showFavourite);
