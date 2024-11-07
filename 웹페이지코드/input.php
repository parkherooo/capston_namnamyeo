<!DOCTYPE html>
<html lang="en">
    <head>
        <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-firestore.js"></script>
        <meta charset="UTF-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=516, initial-scale=0.75, user-scalable=yes" />
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
        <link rel="stylesheet" href="./css/input.css" />

        <title>건강한 라이프스타일을 함께</title>
    </head>
    <body class="animate__animated animate__fadeIn">
        <div class="title_bar_logo">
        <a href="input.php">
            <img src="./img/logo.png" alt="" />
        </a>
        </div>
		<div class="title_span">
			<img class="img_span1" src="./img/span1.png" alt="" />
		</div>
        <div class="input_bar">
            <div class="input-group mb-3">
                <select
                    class="form-select custom-input"
                    id="mySelect1"
                    aria-label="Default select example"
                >
                    <option value="1">벌크업</option>
                    <option value="2">린매스</option>
                    <option value="3">다이어트</option>
                </select>
                <select
                    class="form-select custom-input"
                    id="mySelect2"
                    aria-label="Default select example"
                >
                    <option value="1">활동량 적음</option>
                    <option value="2">가벼운 운동(1~3일/주)</option>
                    <option value="3">보통의 운동(3~5일/주)</option>
                    <option value="4">적극적 운동(6~7일/주)</option>
                    <option value="5">매우 꾸준한 운동 or 운동선수</option>
                </select>
                <select
                    class="form-select custom-input mySelect2"
                    id="mySelect3"
                    aria-label="Default select example"
                >
                    <option value="1">남자</option>
                    <option value="2">여자</option>
                </select>
                <input
                    type="text"
                    class="form-control custom-input"
                    id="height"
                    placeholder="키"
                    aria-label="키"
                />
                <input
                    type="text"
                    class="form-control custom-input"
                    id="weight"
                    placeholder="몸무게"
                    aria-label="몸무게"
                />
                <input
                    type="text"
                    class="form-control custom-input"
                    id="age"
                    placeholder="나이"
                    aria-label="나이"
                />
            </div>

            <img class="search_img" src="./img/search.png" onclick="recommand()" alt="" />
        </div>
        <div class="body_center_link">
            <a href="remain.php">
                <img class="body_center_img_remain" src="./img/remain.png" alt="" />
            </a>
            <a href="dictionary.php">
                <img class="body_center_img_one" src="./img/dictionary.png" alt="" />
            </a>
        </div>
        <div class="body_center_img">
            <img class="body_center_img_two" src="./img/span2.png" alt="" />
            <img class="body_center_img_three" src="./img/span3.png" alt="" />
        </div>

        <div class="body_bottom_img">
            <a href="signup.php">
                <img src="./img/logo2.png" alt="" />
            </a>
        </div>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"
        ></script>
        <script src="./js/recommand.js"></script>
        <script src="./js/input.js"></script>
    </body>
</html>