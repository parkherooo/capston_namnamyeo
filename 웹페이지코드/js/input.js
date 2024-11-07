function calculateBMR() {

  var selectElement1 = document.getElementById("mySelect1");
  var selectElement2 = document.getElementById("mySelect2");
  var selectElement6 = document.getElementById("mySelect3");
  var selectElement3 = document.getElementById("height");
  var selectElement4 = document.getElementById("weight");
  var selectElement5 = document.getElementById("age");

  // 선택된 옵션의 값 가져오기
  //
  var option = selectElement1.value;
  var exercise = selectElement2.value;
  var gender = selectElement6.value;
  var height = selectElement3.value;
  var weight = selectElement4.value;
  var age = selectElement5.value;
	
	console.log(option);
  console.log(exercise);
  console.log(gender);
  console.log(height);
  console.log(weight);
  console.log(age);


  let bmr;

  // 성별에 따라 기초대사량 계산
  if (gender === 1) {
    bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
  }
  else if (gender === 2) {
    bmr = 655 + (9.5 * weight) + (1.8 * height) - (4.7 * age);
  }
  else {
    bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
  }

  var activityFactors;

  switch (exercise) {
    case '1':
      activityFactors = 1.2;
      break;
    case '2':
      activityFactors = 1.375;
      break;
    case '3':
      activityFactors = 1.55;
      break;
    case '4':
      activityFactors = 1.725;
      break;
    case '5':
      activityFactors = 1.9;
      break;
  }
	
	console.log(activityFactors);

  // 활동 수준을 고려한 총 에너지 소비량 계산
  const totalCalories = Math.round(bmr * activityFactors);

  console.log(totalCalories + "Kcal");


  let carbohydrateRatio, proteinRatio, fatRatio;

  switch (option) {
    case '1':
      carbohydrateRatio = 60;
      proteinRatio = 30;
      fatRatio = 10;
      break;

    case '2':
      carbohydrateRatio = 50;
      proteinRatio = 30;
      fatRatio = 20;
      break;

    case '3':
      carbohydrateRatio = 40;
      proteinRatio = 40;
      fatRatio = 20;
      break;

  }

  const carbohydrate = Math.round((bmr * carbohydrateRatio) / (4 * 100));
  const protein = Math.round((bmr * proteinRatio) / (4 * 100));
  const fat = Math.round((bmr * fatRatio) / (9 * 100));


console.log('탄수화물 : ' + carbohydrate + 'g');
console.log('단백질 : ' +  protein + 'g');
console.log('지방 : '+ fat + 'g');

  

}

function goToPage() {
	var heightInput = document.getElementById("height").value;
var weightInput = document.getElementById("weight").value;
var ageInput = document.getElementById("age").value;
	
	console.log(heightInput);
	console.log(weightInput);
	console.log(ageInput);
	
	
	if(heightInput === "" || weightInput ==="" || ageInput === ""){
		 alert("필요 정보들을 입력해주세요");
	}
	else{
		location.href = 'choose.php';
	}
  
}




// 탄수화물 :  101.8g
// 단백질 :  61.1g
// 지방 :  20.4g
