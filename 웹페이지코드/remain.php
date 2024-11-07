<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-firestore.js"></script>
    <meta charset="UTF-8" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="viewport"
      content="width=516, initial-scale=0.75, user-scalable=yes"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <link rel="stylesheet" href="./css/remain.css" />
    <title>환경보호를 위한 한 걸음</title>
  </head>
  <body class="animate__animated animate__fadeIn">
    <div class="title_bar_logo">
    <a href="input.php">
            <img src="./img/logo.png" alt="" />
        </a>
      <img class="img_span4" src="./img/span4.png" alt="" />
    </div>

    <div class="input_bar">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control custom-input"
	      id="food-input"
          placeholder="냉장고 속 남은 식재료를 입력해주세요."
          aria-label="냉장고 속 남은 식재료를 입력해주세요."
        />
      </div>

      <img id="calculate" onclick="calculate()" src="./img/upload.png" alt="" />
    </div>
    <div class="remain">
      <div class="remain_info">
        <div class="remain_square">
			<br />
          <div class="row row-cols-2" id="food-list">
          </div>
        </div>
      </div>
    </div>

    <div class="body_bottom_img">
      <a href="input.php">
        <img class="body_center_img_input" src="./img/food.png" alt="" />
      </a>
      <a href="dictionary.php">
        <img class="body_center_img_one" src="./img/dictionary.png" alt="" />
      </a>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
    <script src="./js/remain.js"></script>
  </body>
</html>
