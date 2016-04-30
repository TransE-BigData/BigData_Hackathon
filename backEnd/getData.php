<?php
if (isset($_POST["crop"]) && isset($_POST["year"])) {
	getDataByMonth($_POST["crop"]);
}
else {
	echo "error";
}

function getDataByMonth($crop) {
	switch ($crop) {
		case '甘藍':
			$filename = 'CabbageByMonth.json';
			break;

		case '胡瓜':
			$filename = 'CucumberByMonth.json';
			break;
		
		case '菜豆':
			$filename = 'BeanByMonth';
			break;

		default:
			$filename = 'error';
			break;
	}

	$jsondata = file_get_contents($filename);
	$json = json_decode($jsondata, true);
	for($i=0; $i<12; $i++) {
		echo $json['month'][$i]." ";
	}
	echo "<br>";
	for($i=0; $i<12; $i++) {
		echo $json['avg_price'][$i]." ";
	}
	echo "<br>";
	for($i=0; $i<12; $i++) {
		echo $json['avg_trade'][$i]." ";
	}
}
?>