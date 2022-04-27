<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>this is a test</title>
</head>
<body>
    <h1>Hi</h1>
    <table border="5">
        <tr>
            <td>ID</td>
            <td>Activity</td>
            <td>Start time</td>
        </tr>
        <?php
            include_once "Function.php";
            $objFile = new FileManager();
            $objFile->FileName = "Users.txt";
            $objFile->separator = "~";
            $objFile->DrawTable("Users.txt");
        ?>
    </table>
</body>
</html>
