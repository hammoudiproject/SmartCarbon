
/*get all questions with image and response*/
SELECT idQuestion, content, img.imageValue, categorie, rep.idreponse, rep.valueReponse, rep.contentReponse 
FROM Question
INNER JOIN image as img ON img.idimage = Question.image_idimage
INNER JOIN reponse as rep ON rep.Question_idQuestion = Question.idQuestion;
