var input = document.querySelector('#photos');
var preview = document.querySelector('.preview');
var label = document.querySelector('label[for="photos"]');
var clear_button = document.querySelector('#clear_preview');

input.addEventListener('change', updateImageDisplay);

function updateImageDisplay(event, clearing_bool=false) {
  var curFiles = input.files;
  if(clearing_bool) {
    curFiles = [];
  }
  if(curFiles.length == 0) {
    label.style.display = 'block';
     preview.classList.remove('hidden-border');
     clear_button.style.display = 'none';
     console.log(document.querySelector('.preview img'))
     document.querySelector('.preview img.preview__photo').remove();
  } else {
    for(var i = 0; i < curFiles.length; i++) {
      if(validFileType(curFiles[i])) {
        var image = document.createElement('img');
        image.src = window.URL.createObjectURL(curFiles[i]);

        image.classList.add('preview__photo');
        preview.appendChild(image);
        label.style.display = 'none'
        preview.classList.add('hidden-border');
        clear_button.style.display = 'block';

      } else {
        alert('Неверный формат изображения')
      }
    }
  }
}

clear_button.addEventListener('click', function() {
  updateImageDisplay('', true);
});

var fileTypes = [
  'image/jpeg',
  'image/jpeg',
  'image/png'
]

function validFileType(file) {
  for(var i = 0; i < fileTypes.length; i++) {
    if(file.type === fileTypes[i]) {
      return true;
    }
  }

  return false;
}

inps = document.querySelectorAll('input');
textarea = document.querySelector('textarea');

function check_input() {
  for(var i = 0; i < inps.length; i++) {
    if(inps[i].value != '') {
      inps[i].classList.add('entered');
    } else {
      inps[i].classList.remove('entered');
    }
  }
}
textarea.addEventListener('input', function() {
  if(textarea.value != '') {
    textarea.classList.add('entered');
  } else {
    textarea.classList.remove('entered');
  }
})

for(var i = 0; i < inps.length; i++) {
  inps[i].addEventListener('input', check_input);
}