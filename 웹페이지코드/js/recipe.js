const jsonobj = sessionStorage.getItem("음식명");
const item = jsonobj.toString();

console.log(item);

const jsonStr = sessionStorage.getItem("레시피정보");
const jsonArray = JSON.parse(jsonStr);

const target_food_data = jsonArray.find((food) => food.foodname === item);

let recipeArray = [];
let recipeImg = [];

recipeArray = target_food_data.recipe;
recipeImg = target_food_data.recipeimg;

console.log(recipeArray);

for(var i = 0; i < recipeArray.length; i++ ){
	console.log(i);
const remainInfoDiv = document.querySelector('.remain_info');

// <p> 요소를 생성합니다.
const paragraph = document.createElement('p');
const lineBreak = document.createElement('br');

// 이미지 요소를 생성하고 속성을 설정
const img = document.createElement('img');
img.src = recipeImg[i]; // 이미지 경로 설정
img.alt = 'Recipe Image'; // 이미지 대체 텍스트 설정

img.style.display = 'flex';
img.style.flexDirection = 'column';
img.style.alignItems = 'center';
img.style.justifyContent = 'center';

// 이미지 크기를 조절하기 위해 스타일을 설정
img.style.width = '100px'; // 이미지 너비 설정
img.style.height = '100px'; // 이미지 높이 설정

// 텍스트 노드를 생성하고 <p> 요소에 추가합니다.
const textNode = document.createTextNode(recipeArray[i]);

// <p> 요소를 <div class="remain_info"> 요소에 추가
paragraph.appendChild(img); // 이미지 요소를 <p>에 추가
paragraph.appendChild(textNode); // 텍스트 노드를 <p>에 추가
remainInfoDiv.appendChild(paragraph);
}