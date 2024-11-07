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

const apiKey = "c329cdd3194f4aa38983";
const serviceId = "COOKRCP01";
const dataType = "json";
const startIdx = 1;
const endIdx = 98;
let RCP_PARTS_DTLS = "";
let url = "";

let foods;

db.collection("food")
  .doc("foodinfo")
  .get()
  .then(function (doc) {
    if (doc.exists) {
      var foodme = doc.data().foods;

      // 배열을 순차적으로 연결하여 RCP_PARTS_DTLS 문자열 생성
      for (var i = 0; i < foodme.length; i++) {
        console.log("들어옴");
        if (i === 0) {
          RCP_PARTS_DTLS += `RCP_PARTS_DTLS=${foodme[i]}`;
          console.log(RCP_PARTS_DTLS);
        } else {
          RCP_PARTS_DTLS += `&RCP_PARTS_DTLS=${foodme[i]}`;
          console.log(RCP_PARTS_DTLS);
        }
      }
    }
    url = `https://openapi.foodsafetykorea.go.kr/api/${apiKey}/${serviceId}/${dataType}/${startIdx}/${endIdx}/${RCP_PARTS_DTLS}`;
  });

console.log(RCP_PARTS_DTLS);

console.log(url);

function recommand() {
  var selectElement1 = document.getElementById("mySelect1");
  var option = selectElement1.value;
  foods = [];

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let row;
      let index = 0;

      // row가 비어있지 않을 때까지 계속해서 데이터를 불러옴
      while (data.COOKRCP01.row[index]) {
        let foodname = "";
        let foodinfo = {};
        let manualimg = [];
        let manual = [];
        let check = 0; // 탄단지 비율 확인
        row = data.COOKRCP01.row[index];

        console.log("음식명 : " + row.RCP_NM);
        console.log("재료 : " + row.RCP_PARTS_DTLS);
        console.log("열량 : " + row.INFO_ENG + "Kcal");
        console.log("탄수화물 : " + row.INFO_CAR + "g");
        console.log("단백질 : " + row.INFO_PRO + "g");
        console.log("지방 : " + row.INFO_FAT + "g");

        // 탄,단,지 소수 변환
        let carbohydrate = parseFloat(row.INFO_CAR);
        let protein = parseFloat(row.INFO_PRO);
        let fat = parseFloat(row.INFO_FAT);

        const total = carbohydrate + protein + fat; // 토탈
        // 탄단지 비율 계산
        const carbohydrateRatio = Math.round((carbohydrate / total) * 100);
        const proteinRatio = Math.round((protein / total) * 100);
        const fatRatio = Math.round((fat / total) * 100);

        console.log("토탈:", total + "%");
        console.log("탄수화물 비율:", carbohydrateRatio + "%");
        console.log("단백질 비율:", proteinRatio + "%");
        console.log("지방 비율:", fatRatio + "%");

        switch (option) {
          case "1":
            if (
              Math.abs(carbohydrateRatio - 60) <= 5 &&
              Math.abs(proteinRatio - 40) <= 5 &&
              Math.abs(fatRatio - 10) <= 5
            ) {
              console.log("탄수화물 비율:", carbohydrateRatio + "%");
              console.log("단백질 비율:", proteinRatio + "%");
              console.log("지방 비율:", fatRatio + "%");
              check++;
            }
          case "2":
            if (
              Math.abs(carbohydrateRatio - 50) <= 5 &&
              Math.abs(proteinRatio - 30) <= 5 &&
              Math.abs(fatRatio - 20) <= 5
            ) {
              console.log("탄수화물 비율:", carbohydrateRatio + "%");
              console.log("단백질 비율:", proteinRatio + "%");
              console.log("지방 비율:", fatRatio + "%");
              check++;
            }
          case "3":
            if (
              Math.abs(carbohydrateRatio - 40) <= 5 &&
              Math.abs(proteinRatio - 40) <= 5 &&
              Math.abs(fatRatio - 20) <= 5
            ) {
              console.log("탄수화물 비율:", carbohydrateRatio + "%");
              console.log("단백질 비율:", proteinRatio + "%");
              console.log("지방 비율:", fatRatio + "%");
              check++;
            }
        }

        //음식명 집어넣기
        if (check === 1) {
          foodname = row.RCP_NM;

          for (let i = 0; i < 20; i++) {
            manual[i] = row[`MANUAL${(i + 1).toString().padStart(2, "0")}`];

            if (!manual[i]) {
              manual.splice(i, 1);
              break; // 메뉴얼이 비어있으면 반복문 종료
            }

            console.log(`Manual ${i + 1}: ${manual[i]}`);
          }

          for (let i = 0; i <= 19; i++) {
            manualimg[i] =
              row[`MANUAL_IMG${(i + 1).toString().padStart(2, "0")}`];

            if (!manualimg[i]) {
              manualimg.splice(i, 1);
              break; // 메뉴얼이 비어있으면 반복문 종료
            }

            console.log(`MANUAL_IMG ${i + 1}: ${manualimg[i]}`);
          }

          foodinfo.foodname = foodname;
          foodinfo.recipe = manual;
          foodinfo.recipeimg = manualimg;
			          foodinfo.carbohydrate = `${carbohydrate} g`;
          foodinfo.protein = `${protein} g`;
          foodinfo.fat = `${fat} g`;
          foodinfo.meterial = row.RCP_PARTS_DTLS;
          foodinfo.img = row.MANUAL_IMG20;
          foods.push(foodinfo);
        }

        index++;
      }

      const jsonfoods = JSON.stringify(foods);
      console.log(jsonfoods);
      // console.log(jsonManualImgArray);
      sessionStorage.setItem("레시피정보", jsonfoods);
		location.href = 'choose.php';
      //console.log(jsonData);
    })
    .catch((error) => console.log("API 호출 실패", error));
}
