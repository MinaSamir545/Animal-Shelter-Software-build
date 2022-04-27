<?php
    session_start();
    $Email =  $_REQUEST["Email"];
    $Password = $_REQUEST["Password"];

    if($Email == "Mina@gmail.com" && $Password == "123")
    {
        $_SESSION["Email"] = $Email;
        Header("location: AddProduct.php");
    }
    else
    {
        header("location: Listp");
    }
?>