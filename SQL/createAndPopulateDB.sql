DROP TABLE IF EXISTS `reponse`;
DROP TABLE IF EXISTS `Question`;
DROP TABLE IF EXISTS `User`;
DROP TABLE IF EXISTS `image`;

CREATE TABLE IF NOT EXISTS `smartcarbon`.`image` (
  `idimage` VARCHAR(40) NOT NULL,
  `imageValue` MEDIUMBLOB NOT NULL,
  PRIMARY KEY (`idimage`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `smartcarbon`.`User` (
    `idUser` VARCHAR(45) NOT NULL,
    `score` INT NOT NULL,
    PRIMARY KEY (`idUser`)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `smartcarbon`.`Question` (
  `idQuestion` INT NOT NULL,
  `content` VARCHAR(200) NOT NULL,
  `image_idimage` VARCHAR(40) NOT NULL,
  `categorie` ENUM("HOUSING", "ENERGY", "TRANSPORT", "FOOD", "MATERIEL PURCHASES") NOT NULL,
  PRIMARY KEY (`idQuestion`, `image_idimage`),
  INDEX `fk_Question_image_idx` (`image_idimage`),
  CONSTRAINT `fk_Question_image`
    FOREIGN KEY (`image_idimage`)
    REFERENCES `smartcarbon`.`image` (`idimage`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `smartcarbon`.`reponse` (
  `idreponse` INT NOT NULL,
  `valueReponse` INT NOT NULL,
  `contentReponse` VARCHAR(200) NOT NULL,
  `Question_idQuestion` INT NOT NULL,
  PRIMARY KEY (`idreponse`, `Question_idQuestion`),
  INDEX `fk_reponse_Question1_idx` (`Question_idQuestion`),
  CONSTRAINT `fk_reponse_Question1`
    FOREIGN KEY (`Question_idQuestion`)
    REFERENCES `smartcarbon`.`Question` (`idQuestion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

