SELECT idQuestion, content, valuePoint, imageValue FROM Question INNER JOIN image ON Question.image_idimage = image.idimage /* Get questions with images */

SELECT idQuestion, content, valuePoint, imageValue FROM Question INNER JOIN image ON Question.image_idimage = image.idimage  WHERE idQuestion = 1/* Get question 1 with image */

SELECT * FROM user;