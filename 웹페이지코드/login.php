<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.bundle.min.js" integrity="sha384-BOsAfwzjNJHrJ8cZidOg56tcQWfp6y72vEJ8xQ9w6Quywb24iOsW913URv1IS4GD" crossorigin="anonymous">
    </script>

    <link rel="stylesheet" href="./css/signup.css">
</head>

<body>
    <section id="main" class="mx-auto mt-5 py-1">
        <h3 style="color : black">---로그인---</h3>
    </section>
    <form method="POST" action="loginProcess.php">
        <div class="w-50 ml-auto mr-auto mt-5">
            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">아이디</label>
                <input name="id" type="text" class="form-control" id="id" placeholder="아이디를 입력해주세요.">
            </div>
            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">비밀번호</label>
                <input name="password" type="password" class="form-control" id="password" placeholder="비밀번호를 입력해주세요.">
            </div>

            <button type="submit" class="btn btn-outline-dark mb-3">로그인</button>
        </div>
    </form>
</body>

</html>