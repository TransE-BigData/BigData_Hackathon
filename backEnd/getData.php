<?php
if ($_POST["range"]=="year") {
	$dataByMonth = getDataByMonth();
	echo json_encode($dataByMonth,JSON_PRETTY_PRINT);
}
else {
	$dataByMonth = getDataByMonth();
	getDataByDate($dataByMonth);
}

function getDataByMonth() {
	$jsondata = file_get_contents('CucumberByMonth.json');
	$cucumber_json = json_decode($jsondata, true);

	$jsondata = file_get_contents('BeanByMonth.json');
	$bean_json = json_decode($jsondata, true);

	$data = array(
		"x_axis" => $cucumber_json['month'],
		"cucumber_price" => $cucumber_json['avg_price'],
		"cucumber_trade" => $cucumber_json['avg_trade'],
		"bean_price" => $bean_json['avg_price'],
		"bean_trade" => $bean_json['avg_trade']
	);

	return $data;
}

function getDataByDate($byMonth) {
	$month = (int)$_POST["month"] - 1;
	$jsondata = file_get_contents('CucumberByDate.json');
	$cucumber_json = json_decode($jsondata, true);

	$jsondata = file_get_contents('BeanByDate.json');
	$bean_json = json_decode($jsondata, true);

	$jsondata = file_get_contents('Average.json');
	$average_json = json_decode($jsondata, true);

	$cucumber = $cucumber_json['Data'][$month];
	$bean = $bean_json['Data'][$month];
	$average = $average_json[$month];

	$data = array("byMonth" => $byMonth,
		"x_axis" => $cucumber['Date'],
		"cucumber_price" => $cucumber['avg_price'],
		"cucumber_trade" => $cucumber['avg_trade'],
		"bean_price" => $bean['avg_price'],
		"bean_trade" => $bean['avg_trade'],
		"average" => $average
	);

	echo json_encode($data,JSON_PRETTY_PRINT);
}

?>