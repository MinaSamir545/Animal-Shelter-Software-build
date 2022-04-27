<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>this is a test</title>
</head>

<body>

    <form action="delMany.php" method="POST">
        <?php
            session_start();
            //echo $_SESSION["Email"];
        ?>

        <h1>List of Activities</h1>

        <table border="1">

            <tr>
                <td>Select</td>
                <td>ID</td>
                <td>Activity</td>
                <td>Delete</td>
            </tr>

            <?php
                include_once "Function.php";
                $Obj = new Activity();
                $arr = $Obj->ListAllActivities();
                
                for($i = 0; $i < count($arr); $i++)
                {
                    echo "<tr><td><input type = checkbox name = ActSel[] value =".$arr[$i]->id."></td>".
                    "<td>".$arr[$i]->id."</td>".
                    "<td><a href =ActivityDetails.php?Actid=".$arr[$i]->id.">".$arr[$i]->ActivityName."</a></td>".
                    "<td><a href = del.php?Id=".$arr[$i]->id.">Delete</a></td>".
                    "</tr>";
                }
            ?>

            <tr>

                <td>
                    <a href="AddActivity.html">Add Activity</a>
                    <input type="submit" value="Delete All selected">
                </td>

            </tr>

        </table>
    </form>
</body>
</html>
