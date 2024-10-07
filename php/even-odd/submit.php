<?php
    $num = "";;
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num  =  $_POST["num"];
    }

    if ($num % 2 == 0) {
        echo "$num is Even Number";
    }
    else{
        echo "$num is Odd Number";
    }

?>