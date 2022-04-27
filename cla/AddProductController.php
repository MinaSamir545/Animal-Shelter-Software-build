<?php
    $id=$_REQUEST["Id"];
    $Price = $_REQUEST["Price"];
    $ProductName = $_REQUEST["ProductName"];
    var_dump($_FILES);

    $target_dir = "images/";
    $target_file = $target_dir.basename($_FILES["ProductImageFile"]["name"]);
    if(move_uploaded_file($_FILES["ProductImageFile"]["tmp_name"], $target_file))
    {
        echo "The file has been uploaded <br>";
    }
    $record = $id."~".$ProductName."~".$target_file."~".$Price;
    //echo $record;q

    $myfile = fopen("Products.txt", "a+");
    $record = "\r\n".$record;
    fwrite($myfile, $record);
    fclose($myfile);
?>