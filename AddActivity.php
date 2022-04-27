<?php
    //echo "The activity name you fill is ".$_REQUEST["ActivityName"];
    include_once "Function.php";
    //$Act = $_REQUEST["ActivityName"];
    $objFile = new FileManager();
    $objFile->FileName = "Activity.txt";
    $objFile->separator = "~";

    $Actobj = new Activity();
    $Actobj->ActivityName = $_REQUEST["ActivityName"];
    $Actobj->ActivityTime = $_REQUEST["ActivityTime"];

    $Actobj->StoreActivity($objFile);
    header("location: ListActivity.php");
?>