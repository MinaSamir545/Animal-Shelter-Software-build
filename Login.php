<?php
    session_start();
    $Email = $_REQUEST["Email"];
    $Password = $_REQUEST["Password"];
    include_once "UserModel.php";
    $Obj = new User();
    $LoginTrueOrFalse = $Obj->Login($Email, $Password);
    if($LoginTrueOrFalse)
    {
        $_SESSION["Email"] = $Email;
        echo "Login Success";
    }
    else
    {
        echo "User name or password is Wrong";
    }
?>