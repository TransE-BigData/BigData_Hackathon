<?php
$jsondata = file_get_contents("http://m.coa.gov.tw/OpenData/FarmTransData.aspx");
$json = json_decode($jsondata, true);
foreach ($json as $time) 
{
	echo $time['交易日期'];
}
?>