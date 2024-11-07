<!DOCTYPE html>
<html lang="ko" dir="ltr">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=516, initial-scale=0.75, user-scalable=yes" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<script>
			$(document).ready(function () {
				$('body').fadeToggle(1500, function () {
					location.href = 'input.php';
				});
			});
		</script>
		<title>남남녀</title>
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
			crossorigin="anonymous"
		/>
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
		/>
		<link rel="stylesheet" href="./css/loading.css" />
	</head>

	<body>
		<div class="loading_img">
			<a class="loading_img_one" href="input.php" class="transition-delay">
				<img src="./img/loading.png" alt="loadingImage" class="img-fluid" />
			</a>
		</div>

		<script src="./js/loading.js" charset="utf-8"></script>
	</body>
</html>