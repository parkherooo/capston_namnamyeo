function calculateBMR(weight, height, age, gender, activityLevel) {
    let bmr;
  
    // 성별에 따라 기초대사량 계산
    if (gender === 'male') {
      bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    }
    else if (gender === 'female') {
      bmr = 655 + (9.5 * weight) + (1.8 * height) - (4.7 * age);
    }
    else {
      bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    }
  
    // 활동 수준에 따른 기초대사량
    const activityFactors = {
      sedentary: 0.2, // 활동량 적은...?
      lightlyActive: 0.375, // 가벼운 운동 (주 1-3일 운동)
      moderatelyActive: 0.55, // 보통 운동 (주 3-5일 운동)
      veryActive: 0.725, // 적극적 운동 (주 6~7 운동)
      superActive: 0.9 // 매우 적극적 운동, 운동 선수
    };
  
    const activityFactor = activityFactors[activityLevel] || 1; // 기본값 : sedentary
  
    // 활동 수준을 고려한 총 에너지 소비량 계산
    const totalCalories = Math.round(bmr * activityFactor);
  
    return totalCalories;
  }
  
  // 예시 : 30세 남성의 키 175cm, 몸무게 70kg인 사람의 기초대사량 계산
  const weight = 70;
  const height = 175;
  const age = 30;
  const gender = 'male';
  const activityLevel = 'moderatelyActive';
  
  const bmr = calculateBMR(weight, height, age, gender, activityLevel);
  console.log('기초대사량 : ', bmr, 'kcal');

// 기초대사량 : 1269.2 kcal
  
  function calculateMacronutrients(bmr, option) {
    let carbohydrateRatio, proteinRatio, fatRatio;
  
    switch (option) {
      case '린매스':
        carbohydrateRatio = 50;
        proteinRatio = 30;
        fatRatio = 20;
        break;

      case '다이어트':
        carbohydrateRatio = 40;
        proteinRatio = 40;
        fatRatio = 20;
        break;

      case '벌크업':
        carbohydrateRatio = 50;
        proteinRatio = 30;
        fatRatio = 10;
        break;

      default:
        carbohydrateRatio = 50;
        proteinRatio = 30;
        fatRatio = 20;
    }
  
    const carbohydrate = Math.round((bmr * carbohydrateRatio) / (4 * 100));
    const protein = Math.round((bmr * proteinRatio) / (4 * 100));
    const fat = Math.round((bmr * fatRatio) / (9 * 100));

    return {
      carbohydrate,
      protein,
      fat
    };
  }
  
  // 린매스 옵션을 선택한 경우
  const option = '린매스';
  
  const macronutrients = calculateMacronutrients(bmr, option);
  console.log('탄수화물 : ', macronutrients.carbohydrate, 'g');
  console.log('단백질 : ', macronutrients.protein, 'g');
  console.log('지방 : ', macronutrients.fat, 'g');

// 탄수화물 :  101.8g
// 단백질 :  61.1g
// 지방 :  20.4g