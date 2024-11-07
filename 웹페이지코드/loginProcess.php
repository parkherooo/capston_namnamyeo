<?php
$conn = mysqli_connect('localhost', 'root', "1234", 'capstone');
$id = $_POST['id'];
$password = $_POST['password'];
$sql = "SELECT * FROM user WHERE id ='{$id}'";
$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_array($result);
$hashedPassword = $row['password'];
$row['id'];

foreach ($row as $key => $r) {
    echo "{$key} : {$r} <br>";
}
$passwordResult = password_verify($password, $hashedPassword);
if ($passwordResult === true) {
    session_start();
    $_SESSION['userId'] = $row['id'];

?>
    <script>
        alert("로그인에 성공하였습니다.")
        location.href = "web.php";
    </script>
<?php
} else {
?>
    <script>
        alert("로그인에 실패하였습니다");
        location.href = "login.php";
    </script>
<?php
}
?>