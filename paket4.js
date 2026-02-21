const header = document.querySelector('h1');
const paragraph = document.querySelector('.div2 p');
const container = document.querySelector('.container2');

const colorHeaderInput = document.getElementById('colorHeader');
const colorParagraphInput = document.getElementById('colorParagraf');
const colorBackgroundInput = document.getElementById('colorBackground');

// Fungsi untuk mengubah warna elemen
function changeColor(element, colorInput, property) {
  if (colorInput.value) {
    element.style[property] = colorInput.value;
  }
}

// Event listener untuk semua input warna
colorHeaderInput.addEventListener('input', () => changeColor(header, colorHeaderInput, 'color'));
colorParagraphInput.addEventListener('input', () => changeColor(paragraph, colorParagraphInput, 'color'));
colorBackgroundInput.addEventListener('input', () => changeColor(container, colorBackgroundInput, 'backgroundColor'));

const judul = document.querySelector('.div1 h1'); 
const paragraf = document.querySelector('.div2 p');

  // Event listener untuk mengupdate judul
  inputHeader.addEventListener('input', function() {
    judul.textContent = inputHeader.value || 'Title'; 
  });

  // Event listener untuk mengupdate paragraf
  textArea.addEventListener('input', function() {
    paragraph.textContent = textArea.value || 'Silakan masukkan teks Anda di sini.';
  });
