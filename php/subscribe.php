<?php 

	if (isset($_POST['EMAIL'])) {$mail = $_POST['EMAIL'];}

	$mail = stripslashes($mail);
	$mail = htmlspecialchars($mail);

	$mail_to = 'mail@mail.com'; // ВАШ mail

	$subject = 'Новый подписчик!';
	
	$headers = 'From: html6.com.ru <support@html6.com.ru>' . "\r\n";
	
	$text .= "\nПочта: ".$mail;
	
	if (mail($mail_to, $subject, $text, $headers)) {
		echo "ok";
	}

?>