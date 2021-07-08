var inputValue = document.querySelector('#inputValue');
var selectItem = document.querySelector('#selectOne');
var kg = document.querySelector('#kg-head');
var gm = document.querySelector('#gram-head');
var pnd = document.querySelector('#pound-head');
var ouc = document.querySelector('#ounce-head');
var card = document.querySelector('#card-item');
var kgValue = document.querySelector('#kg');
var gramValue = document.querySelector('#gram');
var poundValue = document.querySelector('#pound');
var ounceValue = document.querySelector('#ounce');
kg.style.display = 'none';
selectItem.addEventListener('change', function(e){
	var selectItemValue = e.target.value;
	var inputValue = document.querySelector('#inputValue');
	inputValue.placeholder = `Enter ${selectItemValue}`;
	if (selectItemValue == 'kilogram') {
		kg.style.display = 'none';
		gm.style.display = 'block';
		pnd.style.display = 'block';
		ouc.style.display = 'block';
		inputValue.value = '';
		kgValue.innerHTML = '';
		gramValue.innerHTML = '';
		poundValue.innerHTML = '';
		ounceValue.innerHTML = '';
	}
	else if (selectItemValue == 'gram') {
		kg.style.display = 'block';
		gm.style.display = 'none';
		pnd.style.display = 'block';
		ouc.style.display = 'block';
		inputValue.value = '';
		kgValue.innerHTML = '';
		gramValue.innerHTML = '';
		poundValue.innerHTML = '';
		ounceValue.innerHTML = '';
	}
	else if (selectItemValue == 'pound') {
		kg.style.display = 'block';
		gm.style.display = 'block';
		pnd.style.display = 'none';
		ouc.style.display = 'block';
		inputValue.value = '';
		kgValue.innerHTML = '';
		gramValue.innerHTML = '';
		poundValue.innerHTML = '';
		ounceValue.innerHTML = '';
	}
	else{
		kg.style.display = 'block';
		gm.style.display = 'block';
		pnd.style.display = 'block';
		ouc.style.display = 'none';
		inputValue.value = '';
		kgValue.innerHTML = '';
		gramValue.innerHTML = '';
		poundValue.innerHTML = '';
		ounceValue.innerHTML = '';
	}
});

inputValue.addEventListener('input', function(e){
	var inputValue2 = e.target.value;
	var selectItemValue = selectItem.value;
	if (selectItemValue == 'kilogram') {
		gramValue.innerHTML = inputValue2 * 1000;
		poundValue.innerHTML = inputValue2 * 2.205;
		ounceValue.innerHTML = inputValue2 * 35.274;
	}
	else if (selectItemValue == 'gram') {
		kgValue.innerHTML = inputValue2 / 1000;
		poundValue.innerHTML = inputValue2 / 454;
		ounceValue.innerHTML = inputValue2 / 28.35;
	}
	else if (selectItemValue == 'pound') {
		kgValue.innerHTML = inputValue2 / 2.205;
		gramValue.innerHTML = inputValue2 * 454;
		ounceValue.innerHTML = inputValue2 * 16;
	}
	else{
		kgValue.innerHTML = inputValue2 / 35.274;
		gramValue.innerHTML = inputValue2 * 28.35;
		poundValue.innerHTML = inputValue2 / 16;
	}
});