<?php
session_start();
session_destroy();
?>
<script>
    alert("로그아웃에 성공하였습니다.");
    location.replace('index.php');
</script>