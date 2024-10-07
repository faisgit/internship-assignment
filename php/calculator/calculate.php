<?php
    $firstNumber = $secondNumber = $operator = "";
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        # code...
        $firstNumber =  $_POST["numberOne"];
        $secondNumber = $_POST["numberTwo"];
        $operator  =  $_POST["operator"];
    }

    $calc = "" ;

    switch ($operator) {
        case '+':
            $calc = $firstNumber + $secondNumber;
            break;
        case '-':
            $calc =  $firstNumber -  $secondNumber;
            break;
        case '*':
            $calc =  $firstNumber * $secondNumber;
            break;
        case "/":
            if ($secondNumber == 0) {
                # code...
                echo "You cannot divide the number with zero";
            }
            else{
                $calc = $firstNumber / $secondNumber;
            }
            break;
        case "%":
            if ($secondNumber == 0) {
                # code...
                echo "You cannot divide the number with zero";
            }
            else{
                $calc =  $firstNumber % $secondNumber;
            }
            break;
        default:
            # code...
            echo "Invalid Operator";
            break;
    }
    if($calc){
?>

<p> <?php echo "$firstNumber $operator $secondNumber =  $calc";  ?></p>

<?php } ?>