<?php

    include_once "Function.php";
    $ActObj = new Activity();
    $ActObj->delActicity($_GET["Id"]);
    //var_dump ($_REQUEST["ActSel"]);
    foreach($_REQUEST["ActSel"] as $myitem)
    {
        //echo $myitem."<br>";
        $ActObj = new Activity();
        $ActObj->delActicity($myitem);
    }
    header("location: ListActivity.php");
?>