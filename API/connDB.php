<?php

class ConnDB
{
    private $dbConnexion;
    private $host;
    private $user;
    private $pass;
    private $dbname;

    private $conn;

    function __construct(){
        $env_array =getenv();
        $this->host = $env_array["MYSQL_HOST"];
        $this->user = $env_array["MYSQL_USER"];
        $this->dbname = $env_array["MYSQL_DATABASE"];
        $this->pass = $env_array["MYSQL_PASSWORD"];
        try {

            $bdd = new PDO(
                'mysql:host='.$this->host.';dbname='.$this->dbname.';charset=utf8mb4', 
                 $this->user, 
                 $this->pass
            );
            $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
			$bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

            $this->conn = $bdd;
            
        } catch (PDOException $th) {
            $msg = 'ERREUR PDO dans ' . $th->getFile() . ' L.' . $th->getLine() . ' : ' . $th->getMessage();
            print($msg);
            die($msg);
        }
        
    }


    function testConnection(){
        if($this->conn){
            echo "Connection successful";
        }
    }
    

    function executeQuery($query, Array $params = null){
        $stmt = $this->conn->prepare($query);

        if($params){
            foreach ($params as $p) {
                $stmt->bindValue($p[0], $p[1], $p[2]);
                
            }
        }

        
        $stmt->execute();
        return $stmt;

        
    }

}


?>