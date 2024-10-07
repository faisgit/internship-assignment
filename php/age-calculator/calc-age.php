<?php
$birthYear = "";;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $birthYear  =  $_POST["year"];
}
$currYear = date("Y");
if (strlen((string)$birthYear) == 4) {
    # code...
    $age =  $currYear - $birthYear;
    
    echo "You are  $age years old and ";
    if ( $age >= 0 && $age <=12) {
        # code...
        echo "You are child";
    }
    else if ($age >= 13 && $age <= 19) {
        echo "You are in Teenage ";
    }
    else if ($age >= 20 && $age <= 59) {
        echo "You are in Adult hood";
    }
    else{
        echo "You are old man ";
    }


}
else{
    echo "Enter the valid year";
}




?>