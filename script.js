// Normalize a name for comparison: lowercase, trim, collapse
// internal whitespace, so "  Ava   Thompson" matches "Ava Thompson".
function normalize(str) {
  return str.toLowerCase().trim().replace(/\s+/g, ' ');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Build a lookup map once, so 40+ students is instant either way.
const STUDENT_INDEX = new Map(
  STUDENTS.map(student => [normalize(student.name), student])
);

const form = document.getElementById('lookup-form');
const input = document.getElementById('name-input');
const resultEl = document.getElementById('result');
const notFoundEl = document.getElementById('not-found');
const outName = document.getElementById('out-name');
const outProgress = document.getElementById('out-progress');
const outMessage = document.getElementById('out-message');

function showResult(student) {
  outName.textContent = student.name;
  outProgress.textContent = student.progress || '';
  outProgress.style.display = student.progress ? 'inline-block' : 'none';

  // Turn line breaks in the message into paragraphs.
  outMessage.innerHTML = '';
  student.message
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean)
    .forEach(paragraph => {
  const p = document.createElement('p');
  p.innerHTML = escapeHtml(paragraph).replace(/\*(.+?)\*/g, '<em>$1</em>');
  outMessage.appendChild(p);
});

  notFoundEl.classList.remove('show');
  resultEl.classList.add('show');
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showNotFound() {
  resultEl.classList.remove('show');
  notFoundEl.classList.add('show');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = normalize(input.value);
  if (!query) return;

  const student = STUDENT_INDEX.get(query);
  if (student) {
    showResult(student);
  } else {
    showNotFound();
  }
});

// Optional: support a direct link like index.html?name=Ava%20Thompson
// so you can send a student a pre-filled link if you want to.
const params = new URLSearchParams(window.location.search);
const prefill = params.get('name');
if (prefill) {
  input.value = prefill;
  form.dispatchEvent(new Event('submit'));
}
