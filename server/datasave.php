<?php

if(isset($_POST['method'])) {
	header('Content-Type: application/json');
	
	if($_POST['method'] == "saveData" ){
		
		$file = 'data.csv';
		
		$arr = array();
		//$tmstamp = time();
		
		
		//header('Content-Type: text/csv; charset=utf-8');
		//header('Content-Disposition: attachment; filename=data.csv');
		
		
		$date = new DateTime();
		
		
		date_default_timezone_set('Asia/Jerusalem');
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
		
		//$data = implode("\r\n", $arr);
		
		$dataEmail = '';
		$dataEmail .= 'Date: ' . 				$arr[0] . '<br>';
		$dataEmail .= 'Telephone: ' . 			$arr[3] . '<br>';
		$dataEmail .= 'Name: ' . 				$arr[2] . '<br>';
		$dataEmail .= 'Email: ' . 				$arr[4] . '<br>';
		
		

		$headers = ""; 
		$headers .= "Content-Type: text/html; charset=utf-8\r\n"; 
		$headers .= "From: Resonai <no-reply@yowza3d.appspotmail.com>\r\n"; 
		mail("etamaro@gmail.com, galia@yowza3d.com, itamar@yowza3d.com", "Resonai", $dataEmail, $headers);


				
		echo '{"status":"valid"}';
		exit();
					
	}
}else{
	
	echo '{ "status":"HTTP 405 Method Not Allowed"}';
	exit();
}
