<?php 

    require("./connDB.php");

    $conn = new ConnDB();

    //$conn->testConnection();
    
    
    
    $result = $conn->executeQuery("
    SELECT idreponse as id, valueReponse as value, contentReponse as content, Question_idQuestion as idQuestion
    FROM reponse ")->fetchAll();
    
    if(count($result) > 0){
        $arr = array();
        foreach($result as $r){
        array_push($arr, $r);
        }
    
        echo json_encode($arr);
    }
  


?>