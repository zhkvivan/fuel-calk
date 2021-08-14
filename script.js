let btnCount = document.querySelector('#btn-count');

btnCount.addEventListener('click', () => {
	let price = document.querySelector('#price');
	let miles = document.querySelector('#miles');
	let mpg = document.querySelector('#mpg');

	price.style.removeProperty('border-color');
	miles.style.removeProperty('border-color');
	mpg.style.removeProperty('border-color');

	if (price.value === '' || miles.value === '' || mpg.value === '') {
		if (price.value === '') {
			price.style.borderColor = 'red';
		}
		if (miles.value === '') {
			miles.style.borderColor = 'red';
		}
		if (mpg.value === '') {
			mpg.style.borderColor = 'red';
		}
		return
	}

	let litresInOneGallon = 4.546099265;
	let fuelValueInLitres = (litresInOneGallon * miles.value) / mpg.value;
	fuelValueInLitres = Math.round(fuelValueInLitres * 10) / 10;
	let money = Math.round((fuelValueInLitres * price.value) / 100);

	let p = document.querySelector('#result');
	p.textContent = `${fuelValueInLitres} L and £${money}`;
});
