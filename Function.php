<?php

    class ActivityDetails
    {
        public $id;
        public $UserId;
        public $ActivityId;
        public $RealstartTime;
        public $QualityofdoingService;
        public $FileManagerObj;

        function __construct()
        {
            $this->FileManagerObj = new FileManager();
            $this->FileManagerObj->FileName = "ActivityDetails.txt";
            $this->FileManagerObj->separator = "~";
        }

        function GetActivityDetailsFromFileById($id)
        {
            $r = new ActivityDetails();
            $record = $this->FileManagerObj->getLineWithId($id);
            $ArrayLine = explode($this->FileManagerObj->separator, $record);
            $r->id = $ArrayLine[0];
            $r->UserId = $ArrayLine[1];
            $r->ActivityId = $ArrayLine[2];
            $r->RealstartTime = $ArrayLine[3];
            $r->QualityofdoingService = $ArrayLine[4];
            return $r;
        }

        function ListAllActivitiesDetails()
        {
            $MyReturn = array();
            $Myfile = fopen($this->FileManagerObj->FileName, "r+") or die("Unable to open file");
            $i = 0;

            while (!feof($Myfile)) 
            {
                $line = fgets($Myfile);
                $Arrayline = explode($this->FileManagerObj->separator, $line);
                $MyReturn[$i] = $this->GetActivityDetailsFromFileById($Arrayline[0]);
                $i++;
            }
            fclose($Myfile);
            return $MyReturn;
        }
    }

    class Activity
    {
        public $id;
        public $ActivityName;
        public $ActivityTime;
        public $ArrayOfActivityDetails;
        public $FileManagerObj;

        function __construct()
        {
            $this->FileManagerObj = new FileManager();
            $this->FileManagerObj->FileName = "Activity.txt";
            $this->FileManagerObj->separator = "~";
            $ArrayOfActivityDetails = array();
        }

        function StoreActivity()
        {
            $id = $this->FileManagerObj->getLastId($this->FileManagerObj->separator) + 1;
            $record = "\r\n" . $id .
            $this->FileManagerObj->separator .
            $this->ActivityName .
            $this->FileManagerObj->separator .
            $this->ActivityTime;
            //echo $record;
            //exit(0);
            $this->FileManagerObj->StoreRecordinFile($record);
        }


        function ListAllActivities()
        {
            $MyReturn = array();
            $Myfile = fopen($this->FileManagerObj->FileName, "r+") or die("Unable to open file");
            $i = 0;

            while (!feof($Myfile)) 
            {
                $line = fgets($Myfile);
                $Arrayline = explode($this->FileManagerObj->separator, $line);
                $MyReturn[$i] = $this->GetActivityFromFileById($Arrayline[0]);
                $i++;
            }
            fclose($Myfile);
            return $MyReturn;
        }

        function delActicity($id)
        {
            $record = $this->FileManagerObj->getLineWithId($id);
            $this->FileManagerObj->deleteRecord($record);
        }

        function GetActivityFromFileById($id)
        {
            $r = new Activity();
            $record = $this->FileManagerObj->getLineWithId($id);
            $ArrayLine = explode($this->FileManagerObj->separator, $record);
            $r->id = $ArrayLine[0];
            $r->ActivityName = $ArrayLine[1];
            $r->ActivityTime = $ArrayLine[2];
            $objActDetails = new ActivityDetails();
            $AllAct = $objActDetails->ListAllActivitiesDetails();
            $j = 0;
            for ($i = 0; $i < count($AllAct); $i++) 
            {
                if ($AllAct[$i]->ActivityId == $r->id) 
                {
                    $r->ArrayOfActivityDetails[$j] = $AllAct[$i];
                    $j++;
                }
            }
            return $r;
        }
    }

    class FileManager
    {
        public $FileName;
        public $separator;

        function deleteRecord($record)
        {
            $contents = file_get_contents($this->FileName);
            $contents = str_replace("\r\n" . $record, '', $contents);
            file_put_contents($this->FileName, $contents);
        }

        function StoreRecordinFile($record)
        {
            $myfile = fopen($this->FileName, "a+");
            fwrite($myfile, $record);
            fclose($myfile);
        }

        function getLineWithId($Id)
        {
            if (!file_exists($this->FileName)) 
            {
                return 0;
            }
            $Myfile = fopen($this->FileName, "r+") or die("Unable to open file!");
            while (!feof($Myfile)) 
            {
                $line = fgets($Myfile);
                $ArrayLine = explode($this->separator, $line);
                if ($ArrayLine[0] == $Id) 
                {
                    return $line;
                }
            }
            return "Id not found";
        }

        function getLastId()
        {
            if (!file_exists($this->FileName))
            {
                return 0;
            }
            $Myfile = fopen($this->FileName, "r+") or die("Unable to open file!");
            $LastId = 0;
            while (!feof($Myfile))
            {
                $line = fgets($Myfile);
                $ArrayLine = explode($this->separator, $line);
                if ($ArrayLine[0] != "")
                {
                    $LastId = $ArrayLine[0];
                }
            }
            return $LastId;
        }

        function DrawTable()
        {
            $Myfile = fopen($this->FileName, "r+") or die("Unable to open file");
            while (!feof($Myfile))
            {
                $line = fgets($Myfile);
                $Arrayline = explode($this->separator, $line);
                echo "<tr>";
                for ($i = 0; $i < count($Arrayline); $i++)
                {
                    echo "<td>" . $Arrayline[$i] . "</td>";
                }
                echo "</tr>";
            }
            fclose($Myfile);
        }
    }

    /*$obj = new ActivityDetails();
        $myob = $obj->GetActivityDetailsFromFileById(1);
        echo $myob->RealstartTime;*/

    /*$Obj = new Activity();
        $arr = $Obj->ListAllActivities();
        for($i = 0; $i < count($arr); $i++)
        {
            echo $arr[$i]->ActivityName."<br>";
        }*/

    /*$Obj = new Activity();
    $objGdeed = $Obj->GetActivityFromFileById(1);
    echo $objGdeed->ArrayOfActivityDetails[1]->RealstartTime;*/
?>
