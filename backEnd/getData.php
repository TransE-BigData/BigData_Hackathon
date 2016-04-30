<?php
if (isset($_POST["veg"]) && $_POST["range"]=="year") {
	getDataByMonth($_POST["veg"]);
}
else {
	echo "error";
}

function getDataByMonth($crop) {
	switch ($crop) {
		case '甘藍':
			$filename = 'CabbageByMonth.json';
			break;

		case 'melon':
			$filename = 'CucumberByMonth.json';
			break;
		
		case 'bean':
			$filename = 'BeanByMonth.json';
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