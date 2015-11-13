<?php
	#Include the connect.php file
	include('connect2.php');

	#Connect to the database
	$mysqli = new mysqli("$hostname", "$username", "$password", $database);
	
	/* check connection */
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}

	// Preparamos la Consulta	
	$query = "SELECT  id,description,subject,calendar,start,end FROM CRM  ";
	$from = 0;
	$to = 30;
	$query .= " LIMIT ".$from.",".$to;

	//echo ($query);
	$result = $mysqli->prepare($query);
	//echo ($result);

	 /* execute query */
	$result->execute();

	/* bind result variables */
	$result->bind_result($id,$description, $subject, $calendar, $start,$end);

	

	

	/* fetch values */
	while ($result -> fetch()) {
		$CRM[] = array(
		'id' 			=> $id,
		'subject' 		=> $subject,
		'calendar'		=> $calendar,
		'start'			=> $start,
		'end'			=> $end
		);
	}	
	
	
	// get the total rows.
	//$data[] = array(
    //    'Rows' 		=> $Acalidad
	//);
	
	//echo json_encode($data);
	echo json_encode($CRM);
	/* close statement */
	$result->close();
	/* close connection */
	$mysqli->close();
?>