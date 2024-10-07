<?php 
date_default_timezone_set("Asia/Kolkata");
$name  = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    # code...
    $name =  $_POST["name"];
    
}

$greet  = "";

$hours = date("H");


if ($hours >= 5  && $hours <=11) {
    $greet = "Good Morning, $name!";
}
else if($hours >=12 && $hours <= 16 ){
    $greet =  "Good Afternoon, $name!";
}
else if($hours >= 17 && $hours <=21){
    $greet = "Good Evening, $name!";
}
else{
    $greet =  "Good Night, $name!";
}

echo $greet;

?>