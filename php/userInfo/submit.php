<?php
$name =  $age = $email =  "";
if ($_SERVER["REQUEST_METHOD"] ==  "POST") {
    $name = $_POST["name"];
    $age =  $_POST["age"];
    $email =  $_POST["email"];
}

echo "Hello $name, you are $age years old, and your email is $email."

?>