/*HOUSING QUESTIONS*/
INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(1, "What type of housing do you live in?", "house", "HOUSING");

INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(2, "What type of heating do you use at home?", "house", "HOUSING");

INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(3, "How many faucets and toilets do you have at home (bathroom, kitchen, laundry room, outside, 
etc.)", "house", "HOUSING");


INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(4, "How many baths do you take per week ?", "house", "HOUSING");


INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(5, "How often do you turn on the heating/air conditioning ?", "house", "HOUSING");


/*TRANSPORT QUESTION*/
INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(6, "What means of transportation do you use to get around?", "transport", "TRANSPORT");


INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(7, "How many times a week do you use public transportation?", "transport", "TRANSPORT");

INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(8, "How many times a year do you use the train?", "transport", "TRANSPORT");

INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(9, "If you have a car, approximately how many kilometers do you drive per year?", "transport", "TRANSPORT");


/*FOOD*/
INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(10, "How many times a week do you eat meat or fish? ", "food", "FOOD");

INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(11, "While shopping, do you choose, as much as possible, local products (not from another province or 
country)?", "food", "FOOD");

INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(12, "Do you buy food from eco-friendly agriculture?", "food", "FOOD");


/*ENERGY*/


INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(13, "How many light bulbs do you have in your house?", "energy", "ENERGY");

INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(14, "How often do you use the light?", "energy", "ENERGY");

INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(15, "What type of energy do you use for your home? ", "energy", "ENERGY");

INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(16, "How much energy in KWh do you consume during the month? ", "energy", "ENERGY");


/*MATERIAL PURCHASES*/
INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(17, "How often do you go shopping (clothes) during the month?", "material purchases", "MATERIEL PURCHASES");

INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(18, "Do you buy recycled clothing?", "material purchases", "MATERIEL PURCHASES");



INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(19, "How many major items of new equipment (e.g., stereo, TV, DVD player, computer, furniture, car, 
appliances, etc.) have you purchased in the last 12 months?", "material purchases", "MATERIEL PURCHASES");


INSERT INTO `smartcarbon`.`Question` (`idQuestion`, `content`, `image_idimage`, `categorie`)
VALUES(20, "Have you purchased any energy efficient items in the last 12 months (light bulbs, appliances, etc.)?", "material purchases", "MATERIEL PURCHASES");


/*----- BEGIN HOUSING QUESTIONS -----*/
/*Answers Q1*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(1, 5, "apartement", 1);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(2, 7, "studio", 1);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(3, 10, "family house", 1);


/*Answers Q2*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(4, 5, "natural gas", 2);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(5, 7, "electricity", 2);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(6, 3, "renewable energy (solar, wind, etc...)", 2);


/*Answers Q3*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(7, 5, "3 to 5", 3);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(8, 7, "6 to 8", 3);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(9, 5, "8 to 10", 3);

/*Answers Q4*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(10, 5, "3 to 5", 4);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(11, 7, "6 to 8", 4);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(12, 10, "8 to 10", 4);


/*Answers Q5*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(13, 5, "Only at night", 5);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(14, 5, "At any time of the day", 5);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(15, 5, "Only when necessary (rarely)", 5);
/*------ END HOUSING QUESTIONS ------*/


/*------ BEGIN TRANSPORT QUESTIONS ------*/
/*Answers Q6*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(16, 10, "by car", 6);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(17, 5, "by public transportation (bus, subway, commuter train, etc.)", 6);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(18, 3, "by foot/bike", 6);

/*Answers Q7*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(19, 7, "0-5", 7);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(20, 5, "6-15", 7);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(21, 3, "This is my daily mode of transportation", 7);


/*Answers Q8*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(22, 5, "1-5", 8);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(23, 7, "6-10", 8);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(24, 5, "more than 10", 8);


/*Answers Q9*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(25, 5, "Between 100-300", 9);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(26, 7, "Between 301-600", 9);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(27, 10, "More than 600", 9);
/*---- END TRANSPORT QUESTIONS ----*/


/*---- BEGIN FOOD QUESTIONS ---*/
/*Answers Q10*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(28, 0, "0", 10);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(29, 5, "1-6", 10);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(30, 7, "More than 6", 10);

/*Answers Q11*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(31, 3, "yes", 11);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(32, 10, "no", 11);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(33, 5, "sometimes", 11);


/*Answers Q12*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(34, 3, "yes", 12);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(35, 7, "no", 12);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(36, 5, "sometimes", 12);
/*----- END FOOD QUESTIONS ----*/


/*---- BEGIN ENERGY QUESTIONS ----*/
/*Answers Q13*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(37, 5, "yes", 13);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(38, 7, "no", 13);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(39, 10, "sometimes", 13);


/*Answers Q14*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(40, 5, "Only at night", 14);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(41, 10, "At any time of the day", 14);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(42, 3, "Only when necessary (rarely)", 14);

/*Answers Q15*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(43, 5, "Renewable energy (Wind, Solar, ...)", 15);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(44, 7, "Electrical energy", 15);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(45, 10, "Fossil energy", 15);


/*Answers Q16*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(46, 5, "Between 5 and 30", 16);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(47, 7, "Between 31 and 60", 16);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(48, 10, "More than 60", 16);
/*---- END ENERGY QUESTIONS ----*/

/*--- BEGIN MATERIAL PURCHASES QUESTIONS ---*/
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(49, 3, "Only when necessary (rarely)", 17);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(50, 5, "1 - 3", 17);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(51, 7, "4 - 6 OR MORE", 17);


INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(52, 5, "Yes", 18);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(53, 10, "No", 18);


INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(54, 0, "0", 19);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(55, 5, "1 - 3", 19);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(56, 7, "4 - 6", 19);


INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(57, 5, "Yes", 20);
INSERT INTO `smartcarbon`.`reponse` (`idreponse`, `valueReponse`, `contentReponse`, `Question_idQuestion`)
VALUES(58, 10, "No", 20);
/* ------ END MATERIAL PURCHASES QUESTION */