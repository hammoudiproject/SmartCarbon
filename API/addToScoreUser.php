<?php
    header('Access-Control-Allow-Origin: *');
    require("./connDB.php");

    $conn = new ConnDB();

    if(isset($_GET["score"]) && isset($_GET["idUser"])){
        $score = $_GET["score"];
        $idUser = $_GET["idUser"];

        $sqlQuery = "SELECT score FROM User WHERE idUser=:idSearched";
        $params = array(
            array('idSearched', $idUser, PDO::PARAM_STR)
        );

        $result = $conn->executeQuery($sqlQuery, $params)->fetchAll();

        if(count($result) == 1){
            $fetchedScore = $result[0]->score;
            $fetchedScore += $score;
            $updateQuery = "UPDATE User SET score = :fetchedScore WHERE idUser = :idSearched";
            $updateParams = array(
                array('idSearched', $idUser, PDO::PARAM_STR),
                array('fetchedScore', $fetchedScore, PDO::PARAM_INT)
            );
            
            
            
            $resultUpdate = $conn->executeQuery($updateQuery, $updateParams);
            if($resultUpdate->rowCount() == 1){
                echo "success";
            }else{
                echo "error";
            }
        }else{
            echo "error";
        }
    }else{
        echo "error";
    }
?>