const jsonStr = sessionStorage.getItem('레시피정보');

const jsonArray = JSON.parse(jsonStr);
var foodNames = jsonArray.map(function(item) {
  return item.foodname;
});

console.log(jsonArray);



for (let i = 0; i < foodNames.length; i++) {
  const item = foodNames[i];
	
	const inputBar = document.querySelector('.input_bar');


const divElement = document.createElement('div');
divElement.classList.add('b');


const buttonElement = document.createElement('button');
buttonElement.setAttribute('type', 'button');
buttonElement.classList.add('btn', 'btn-secondary');
buttonElement.style.setProperty('--bs-btn-padding-y', '10px');
buttonElement.style.setProperty('--bs-btn-padding-x', '50px');
buttonElement.style.setProperty('--bs-btn-font-size', '20px');
buttonElement.textContent = item;


buttonElement.addEventListener('click', () => {
  location.href = 'info.php';
	sessionStorage.setItem("음식명",item);
});


divElement.appendChild(buttonElement);


inputBar.appendChild(divElement);
  
}



