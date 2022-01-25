<?php 

    header('Access-Control-Allow-Origin: *');
    require("./connDB.php");

    $conn = new ConnDB();

    //$conn->testConnection();
    
    
    
    $result = $conn->executeQuery("
    SELECT idQuestion as id, content, img.imageValue as image, categorie
    FROM Question
    INNER JOIN image as img ON img.idimage = Question.image_idimage")->fetchAll();
    
    if(count($result) > 0){
        $arr = array();
        foreach($result as $r){
        array_push($arr, $r);
        }
    
        echo json_encode($arr);
    }
  


?>