var firebaseConfig = {
  apiKey: "AIzaSyA1MzeJ5z2HX5xCRa_ldfA7YoWQ4Cwurjc",
  authDomain: "food-57a32.firebaseapp.com",
  projectId: "food-57a32",
  storageBucket: "food-57a32.appspot.com",
  messagingSenderId: "208921684535",
  appId: "1:208921684535:web:c0b788af681df605aaedb2",
  measurementId: "G-W5SS4M2DPN"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firestore 인스턴스 생성
var db = firebase.firestore();

function calculate() {
  var input = document.querySelector(".form-control");
  var value = input.value;

  // 데이터 추가
  db.collection("food")
    .doc("foodinfo")
    .update({
      foods: firebase.firestore.FieldValue.arrayUnion(value),
    })
    .then(function () {
      console.log("데이터 추가 완료");
      input.value = ""; // 입력 필드 초기화
      location.reload();
    })
    .catch(function (error) {
      console.error("데이터 추가 실패: ", error);
    });
}

// 식재료 목록 표시 함수
function displayFoodList() {
  var foodListContainer = document.getElementById("food-list");

  // Firestore에서 데이터 가져오기
  db.collection("food")
    .doc("foodinfo")
    .get()
    .then(function (doc) {
      if (doc.exists) {
        var foods = doc.data().foods;

        // 이전에 표시된 목록 초기화
        foodListContainer.innerHTML = "";

        // 가져온 데이터를 Column에 추가
        for (var i = 0; i < foods.length; i++) {
          var column = document.createElement("div");
          column.className = "col";
          column.textContent = foods[i];
          foodListContainer.appendChild(column);
        }
        
      } else {
        console.log("문서가 존재하지 않습니다.");
      }
    })
    .catch(function (error) {
      console.log("데이터 가져오기 실패: ", error);
    });
}


// 페이지 로드 시 식재료 목록 표시 함수 호출
window.onload = displayFoodList;