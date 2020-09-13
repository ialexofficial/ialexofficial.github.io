function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear();

  return yy + '-' + mm + '-' + dd;
}

inp = document.querySelector('input[type="date"]');
today = formatDate(new Date());
inp.setAttribute('min', today);
inp.value = today;

radios = document.querySelectorAll('input[type="radio"]');
for(var i = 0; i < radios.length; i++) {
	radios[i].addEventListener('change', function() {
		document.querySelector('.form-button').classList.remove('disabled');
		if(radios[0].checked) {
			inp.style.pointerEvents = 'none';
		} else {
			inp.style.pointerEvents = 'unset';
		}
	});
}