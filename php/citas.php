<?php
#Include the connect.php file
include ('connect2.php');

// Connect to the database
$mysqli = new mysqli($hostname, $username, $password, $database);

/* check connection */
if (mysqli_connect_errno())
	{
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
	}

// get data and store in a json array
$from = 0;
$to = 30;
$query = "SELECT id,numuser,subject,description,calendar,style,start,end FROM CRM LIMIT ?,?";
$result = $mysqli->prepare($query);
$result->bind_param('ii', $from, $to);
$result->execute();

/* bind result variables */
$result->bind_result($numuser,$subject,$description,$calendar,$style,$start,$end);

/* fetch values */
while ($result->fetch())
	{
	$citas[] = array(
		'id'			=> $id,
		'numuser'	 	=> $numuser,
		'subject' 		=> $subject,
		'description' 	=> $description,
		'calendar'		=> $calendar,
		'style'			=> $style,
		'start'			=> $start,
		'end'			=> $end
	);
	}

echo json_encode($citas);

/* close statement */
$result->close();

/* close connection */
$mysqli->close();
?>