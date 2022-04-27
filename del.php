<?php
    include_once "Function.php";
    $ActObj = new Activity();
    $ActObj->delActicity($_GET["Id"]);
    header("location: ListActivity.php");
?>