<?php

    header('Access-Control-Allow-Origin: *');
    require("./connDB.php");

    $conn = new ConnDB();
    $table = "User";
    $param1 = "idUser";
    $param2 = "score";


    $query = "SELECT ". $param1 .", $param2" . " FROM " . $table;
    $result = $conn->executeQuery($query)->fetchAll();

    if(count($result) > 0){
        $arr = array();

        foreach($result as $r){
            array_push($arr, $r);
        }

        echo json_encode($arr);
    }else{
        echo "Error or no records found!";
    }


?>