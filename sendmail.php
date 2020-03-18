<html>
<head>
<title>Форма заявки с сайта</title>
</head>
<body>

<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);

$name = urldecode($name);
$email = urldecode($email);

$name = trim($name);
$email = trim($email);

echo $name;
echo "<br>";
echo $email;

if (mail("example", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: example\r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>


