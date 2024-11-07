const jsonobj = sessionStorage.getItem("음식명");
const item = jsonobj.toString();

console.log(item);

const jsonStr = sessionStorage.getItem("레시피정보");
const jsonArray = JSON.parse(jsonStr);

const target_food_data = jsonArray.find((food) => food.foodname === item);

//탄단지,재료
let fat = "";
let protein = "";
let carbohydrate = "";
let meterial = "";
let pmeterialArray;
let recipeImg = [];

// 요소가 존재할 경우 해당 요소의 값 추출
if (target_food_data) {
  pmeterialArray = [];
  fat = target_food_data.fat;
  protein = target_food_data.protein;
  carbohydrate = target_food_data.carbohydrate;
  meterial = target_food_data.meterial;
  recipeImg = target_food_data.recipeimg;
  const forbiddenPatterns = /[\n●소스 :\n●주재료 :\n●양념 :\n●필수 재료 : ]/g;

  // 금지어 패턴을 제외한 문자열 추출
  const processedString = meterial.replace(forbiddenPatterns, "");
  pmeterialArray = processedString.split(",");
  console.log(pmeterialArray);

  console.log(`음식명: ${item}`);
  console.log(`지방: ${fat}`);
  console.log(`단백질: ${protein}`);
  console.log(`탄수화물: ${carbohydrate}`);
  console.log(`재료: ${meterial}`);
  add();
	metadd();
} else {
  console.log(`음식명 '${item}'에 해당하는 데이터를 찾을 수 없습니다.`);
}

function metadd() {
  var firebaseConfig = {
    apiKey: "AIzaSyA1MzeJ5z2HX5xCRa_ldfA7YoWQ4Cwurjc",
    authDomain: "food-57a32.firebaseapp.com",
    projectId: "food-57a32",
    storageBucket: "food-57a32.appspot.com",
    messagingSenderId: "208921684535",
    appId: "1:208921684535:web:c0b788af681df605aaedb2",
    measurementId: "G-W5SS4M2DPN"
  };

  firebase.initializeApp(firebaseConfig);

  // Firestore 인스턴스 생성
  var db = firebase.firestore();

  db.collection("food")
    .doc("foodinfo")
    .get()
    .then(function (doc) {
      if (doc.exists) {
        var foodme = doc.data().foods;

        // 배열을 순차적으로 연결하여 RCP_PARTS_DTLS 문자열 생성
        for (var i = 0; i < foodme.length; i++) {
          for (var j = 0; j < pmeterialArray.length; j++) {
            if (pmeterialArray[j].includes(foodme[i])) {
              const meterialList = document.querySelector(".meterial_list");

              // 자식 요소인 meterial_list-has_metrial 생성
              const meterialItem = document.createElement("div");
              meterialItem.className = "meterial_list-has_metrial";
              meterialItem.textContent = pmeterialArray[j];

              // meterial_list에 meterial_list-has_metrial 추가
              meterialList.appendChild(meterialItem);
            } else {
				
				
				const koreanPattern = /[ㄱ-ㅎㅏ-ㅣ가-힣]+/g;

// 문자열에서 한국어 부분 추출
const match = pmeterialArray[j].match(koreanPattern);
const matchString = match ? match[0] : "";
				
              // 부모 요소인 meterial_list 선택
              const meterialList = document.querySelector(".meterial_list");

              // 자식 요소인 meterial_list-no_metrial 생성
              const meterialItem = document.createElement("div");
              meterialItem.className = "meterial_list-no_metrial";

              // 이미지 요소 생성
              const image = document.createElement("img");
              image.src = "./img/buy.png";
              image.alt = "";
				image.onclick = function() {
  window.open('https://www.kurly.com/search?sword='+matchString, "_blank");
  return false; 
};

              // 내부 박스 요소 생성
              const innerBox = document.createElement("div");
              innerBox.className = "meterial_list-no_metrial_box";
              innerBox.textContent = pmeterialArray[j];

              // meterial_list-no_metrial에 이미지와 내부 박스 추가
              meterialItem.appendChild(image);
              meterialItem.appendChild(innerBox);

              // meterial_list에 meterial_list-no_metrial 추가
              meterialList.appendChild(meterialItem);
            }
          }
        }
      }
    });
}

console.log(`이미지경로: ${recipeImg}`);

function add() {
  // 이미지 요소 생성
  const imgElement = document.createElement("img");
  imgElement.setAttribute("class", "left_meterial_img");
  imgElement.setAttribute("src", recipeImg[recipeImg.length - 1]);
  imgElement.setAttribute("alt", "");

  // 왼쪽 재료 정보 요소 생성
  const leftMeterialInfo = document.createElement("div");
  leftMeterialInfo.setAttribute("class", "left_meterial_info");

  // 재료 1 제목 요소 생성
  const titleElement = document.createElement("p");
  titleElement.setAttribute("class", "left_meterial_title");
  titleElement.textContent = item;

  // 재료 정보 요소 생성
  const textElement = document.createElement("p");
  textElement.setAttribute("class", "left_meterial_text");
  textElement.innerHTML = `탄수화물: ${carbohydrate}<br />단백질: ${protein}<br />지방: ${fat}`;

  // 요소들을 문서에 추가
  leftMeterialInfo.appendChild(titleElement);
  leftMeterialInfo.appendChild(textElement);

  // 남은 재료 요소에 이미지와 정보 요소를 추가
  const leftMeterial = document.querySelector(".left_meterial");
  leftMeterial.appendChild(imgElement);
  leftMeterial.appendChild(leftMeterialInfo);
}
