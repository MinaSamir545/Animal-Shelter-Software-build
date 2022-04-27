<?php
include_once "Function.php";
    $ActObj = new Activity();
    $Myob = $ActObj->GetActivityFromFileById($_GET["Actid"]);
    echo  $Myob->id."<br>";
    echo  $Myob->ActivityName."<br>";
    echo  $Myob->ActivityTime."<br>";
    echo "<br>List of details<br>";
    for($i = 0; $i < count($Myob->ArrayOfActivityDetails);$i++)
    {
        echo $Myob->ArrayOfActivityDetails[$i]->RealstartTime;
    }
?>