<?php

$conn = mysqli_connect('localhost', 'root', "1234", 'capstone');
$hashedPassword = password_hash($_POST['password'], PASSWORD_DEFAULT);
echo $hashedPassword;
$sql = "
    INSERT INTO user
    (id, name, email, password, dormitory, stu_num, created)
    VALUES('{$_POST['id']}', '{$_POST['name']}', '{$_POST['email']}', '{$hashedPassword}', '{$_POST['dormitory']}', '{$_POST['stu_num']}', NOW()
);";

echo $sql;
$result = mysqli_query($conn, $sql);

if ($result === false) {
    echo "저장에 문제가 생겼습니다. 관리자에게 문의해주세요.";
    echo mysqli_error($conn);
} else {
    $to_sql = "UPDATE user SET cnt = cnt + 1";
    mysqli_query($conn, $to_sql);

    $r_sql = "SELECT * FROM user ORDER BY created LIMIT 1";
    $result = mysqli_query($conn, $r_sql);
    $row = mysqli_fetch_array($result);
    $count = $row['cnt'];

    $too_sql = "UPDATE user SET stu_num = stu_num + $count ORDER BY created DESC LIMIT 1";
    mysqli_query($conn, $too_sql);

    for ($i = 0; $i < 4; $i++) {
        $grade_sql = "INSERT INTO grade (stu_num) SELECT stu_num FROM user ORDER BY created DESC LIMIT 1";
        mysqli_query($conn, $grade_sql);

        $sql2 = "SELECT * FROM lecture ORDER BY rand() LIMIT 1";
        $result2 = mysqli_query($conn, $sql2);
        $rows = mysqli_fetch_array($result2);
        $lecNum = $rows['lec_num'];

        $rand_sql = "UPDATE grade SET lec_num = $lecNum ORDER BY stu_num DESC LIMIT 1";
        mysqli_query($conn, $rand_sql);

        $rating_sql = "SELECT * FROM rating ORDER BY rand()";
        $rating_result = mysqli_query($conn, $rating_sql);
        $rows2 = mysqli_fetch_array($rating_result);

        $grade_sql = "UPDATE grade SET rating = '{$rows2['grade']}' ORDER BY stu_num DESC LIMIT 1";
        mysqli_query($conn, $grade_sql);
    }
?>
    <script>
        alert("회원가입하신 걸 축하드립니다!");
        location.href = "index.php";
    </script>
<?php
}
?>