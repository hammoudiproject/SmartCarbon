<?php
    header('Access-Control-Allow-Origin: *');
    require("./connDB.php");

    $conn = new ConnDB();
    $table = "User";
    $idUser = $_GET['idUser'];
    $score = $_GET['score'];

    if(isset($_GET['score']) && isset($_GET['isUser'])){
        $stmt = "INSERT INTO User VALUES(:idUser,:score)";
        $array = array(
            array(':idUser', $idUser, PDO::PARAM_STR),
            array(':score', $score, PDO::PARAM_INT)
        );
    
        $result = $conn->executeQuery($stmt, $array);
    
        if($result->rowCount() == 1){
            echo "insert success";
        }else{
            echo "fail";
        }
    }else{
        echo "fail";
    }
   


?>