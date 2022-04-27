<?php
    include_once "Function.php";
    class User
    {
        public $id;
        public $Email;
        public $Password;
        public $FileManagerObj;

        function __construct()
        {
            $this->FileManagerObj = new FileManager();
            $this->FileManagerObj->FileName = "Users.txt";
            $this->FileManagerObj->separator = "~";
        }

        function Login($Email, $Password)
        {
            $MyReturn = new User();
            $Myfile = fopen($this->FileManagerObj->FileName, "r+") or die("Unable to open file");

            while (!feof($Myfile)) 
            {
                $line = fgets($Myfile);
                $Arrayline = explode($this->FileManagerObj->separator, $line);
                //echo strlen(trim($Arrayline[2]))."".$Arrayline[2]."<br>";
                //echo strlen($Password)."<br>";
                if($Email == $Arrayline[1] && $Password == trim($Arrayline[2]))
                {
                    return true;
                }
            }
            fclose($Myfile);
            return false;
        }
    }
?>