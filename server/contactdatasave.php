<?php

if(isset($_POST['method'])) {
	header('Content-Type: application/json');
	
	if($_POST['method'] == "saveCtnData" ){
		
		$file = 'contact.csv';		
		$arr = array();	
		$date = new DateTime();
		$tmstamp = $date->format("Y-m-d H:i:s");
		array_push($arr, $tmstamp);
		foreach ($_POST as $key => $value) {
		  array_push($arr, $value);
		}		
		/*
		$fl = fopen($file, 'a');
		fputcsv($fl, $arr);	
		fclose($fl);
		*/
		
		$dataEmail = '';
		$dataEmail .= 'Date: ' . 				$arr[0] . '<br>';
		$dataEmail .= 'Name: ' . 				$arr[2] . '<br>';
		$dataEmail .= 'Email: ' . 				$arr[3] . '<br>';
		$dataEmail .= 'Message: ' . 			$arr[4] . '<br>';
		
		$headers = ""; 
		$headers .= "Content-Type: text/html; charset=utf-8\r\n"; 
		$headers .= "From: Resonai <no-reply@yowza3d.appspotmail.com>\r\n"; 
		mail("info@resonai.com", "Main Page Enquiry", $dataEmail, $headers);
		
		echo '{"status":"valid"}';
		exit();
					
	}
}else{
	
	echo '{ "status":"HTTP 405 Method Not Allowed"}';
	exit();
}
