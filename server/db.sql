-- CREATE DATABASE IE4791;

use IE4791;

-- create table students(
-- id INT AUTO_INCREMENT PRIMARY KEY,
-- firstName VARCHAR(255) NOT NULL,
-- lastName VARCHAR(255) NOT NULL,
-- email VARCHAR(255) NOT NULL,
-- dateofBirth DATE NOT NULL
-- );



-- create table courses(
-- id INT AUTO_INCREMENT PRIMARY KEY,
-- courseName VARCHAR(255) NOT NULL,
-- courseDescription VARCHAR(255) NOT NULL,
-- difficultyLevel VARCHAR(255) NOT NULL
-- );

-- create table lessons(
-- id INT AUTO_INCREMENT PRIMARY KEY,
-- courses_id INT,
-- lessonTitle VARCHAR(255) NOT NULL,
-- contentURL VARCHAR(2083) NOT NULL,
-- FOREIGN KEY (courses_id) REFERENCES courses(id)
-- );

-- create table assessments (
-- id INT AUTO_INCREMENT PRIMARY KEY,
-- courses_id INT,
-- assessmentTitle VARCHAR(255) NOT NULL,
-- content VARCHAR(255) NOT NULL,
-- FOREIGN KEY (courses_id) REFERENCES courses(id)
-- );


-- create table enrollment(
-- id INT AUTO_INCREMENT PRIMARY KEY,
-- student_id INT,
-- course_id INT,
-- enrollmentDate DATE NOT NULL,
-- FOREIGN KEY (student_id) REFERENCES students(id),
-- FOREIGN KEY (course_id) REFERENCES courses(id),
-- UNIQUE(student_id, course_id) 
-- );

-- create table assessmentProgress(
-- enrollment_id INT,
-- assessments_id INT,
-- completed BOOLEAN NOT NULL DEFAULT FALSE,
-- MARK INT NOT NULL DEFAULT 0 ,
-- UNIQUE (enrollment_id,assessments_id),
-- FOREIGN KEY (enrollment_id) REFERENCES enrollment(id),
-- FOREIGN KEY (assessments_id) REFERENCES assessments(id)
-- );


-- create table lessonProgress(
-- id INT AUTO_INCREMENT PRIMARY KEY,
-- enrollment_id INT,
-- lessons_id INT,
-- completed BOOLEAN NOT NULL DEFAULT FALSE,
-- lastAccessed DATE,
-- UNIQUE (enrollment_id,lessons_id),
-- FOREIGN KEY (enrollment_id) REFERENCES enrollment(id),
-- FOREIGN KEY (lessons_id) REFERENCES lessons(id)
-- );


-- create table srsSchedule (
-- lessonProgress_id INT NOT NULL PRIMARY KEY,
-- currentLevel INT NOT NULL ,
-- completed BOOLEAN NOT NULL DEFAULT FALSE,
-- nextReviewDate DATE ,
-- FOREIGN KEY(lessonProgress_id) REFERENCES lessonProgress(id)
-- );


-- CREATE TABLE srsContent (
-- id INT AUTO_INCREMENT PRIMARY KEY ,
-- lesson_id INT ,
-- content VARCHAR(255) NOT NULL,
-- intervalLevel INT NOT NULL
-- );






-- INSERT INTO students (firstName, lastName, email, dateofBirth) VALUES
-- ('Ryan', 'Carroll', 'ufuentes@bates-green.com', '1995-01-14'),
-- ('Cassandra', 'Singh', 'vlynch@yahoo.com', '1993-10-08'),
-- ('Amanda', 'Watkins', 'willie83@hotmail.com', '1998-07-29'),
-- ('Robert', 'Choi', 'melissawilliams@gmail.com', '2005-04-07'),
-- ('Daniel', 'Brady', 'marymitchell@sandoval.com', '2000-10-28'),
-- ('Aaron', 'Hernandez', 'amanda40@fuller.org', '1996-06-18'),
-- ('Ashley', 'Sullivan', 'rossbrady@guzman-williams.net', '2001-11-27'),
-- ('Erin', 'Bruce', 'gabrielgutierrez@lopez-glover.com', '2003-12-18'),
-- ('Katherine', 'Velasquez', 'thomassmith@gmail.com', '2000-06-02'),
-- ('Brian', 'Lawrence', 'bonnie07@yahoo.com', '2002-12-13'),
-- ('Alex', 'Johnson', 'alex.johnson@example.com', '1998-06-01'),
-- ('Maria', 'Garcia', 'maria.garcia@example.com', '2000-09-15'),
-- ('James', 'Smith', 'james.smith@example.com', '1995-03-22'),
-- ('Emily', 'Brown', 'emily.brown@example.com', '2002-11-08'),
-- ('David', 'Davis', 'david.davis@example.com', '1999-01-18');




-- INSERT INTO courses (courseName, courseDescription, difficultyLevel) VALUES
-- ('Beginner Spanish', 'Learn basic Spanish grammar and vocabulary.', 'Beginner'),
-- ('Intermediate French', 'Enhance your French skills with more complex grammar and increased vocabulary.', 'Intermediate'),
-- ('Advanced Japanese', 'Dive deep into advanced grammatical structures, vocabulary, and kanji.', 'Advanced'),
-- ('Mandarin Chinese for Beginners', 'Start your journey in Mandarin with basic phrases and character recognition.', 'Beginner');

-- INSERT INTO lessons (courses_id,lessonTitle, contentURL) VALUES
-- (1,'Spanish Greetings', 'https://example.com/spanish-greetings'),
-- (1,'Numbers and Colors in Spanish', 'https://example.com/numbers-colors-spanish'),
-- (1,'Basic Spanish Verbs', 'https://example.com/basic-spanish-verbs'),
-- (1,'Spanish Conversation Practice', 'https://example.com/spanish-conversation-practice'),
-- (2,'French Idioms and Expressions', 'https://example.com/french-idioms-expressions'),
-- (2,'French Subjunctive Mood', 'https://example.com/french-subjunctive-mood'),
-- (2,'French Literature Overview', 'https://example.com/french-literature-overview'),
-- (2,'French Film and Cinema', 'https://example.com/french-film-cinema'),
-- (3,'Advanced Kanji Characters', 'https://example.com/advanced-kanji-characters'),
-- (3,'Japanese Business Etiquette', 'https://example.com/japanese-business-etiquette'),
-- (3,'Japanese History and Culture', 'https://example.com/japanese-history-culture'),
-- (3,'Japanese Poetry and Haiku', 'https://example.com/japanese-poetry-haiku'),
-- (4,'Chinese Numbers and Counters', 'https://example.com/chinese-numbers-counters'),
-- (4,'Chinese Family and Relationships', 'https://example.com/chinese-family-relationships'),
-- (4,'Chinese Holidays and Traditions', 'https://example.com/chinese-holidays-traditions'),
-- (4,'Chinese Food and Dining Vocabulary', 'https://example.com/chinese-food-dining');



-- INSERT INTO assessments (courses_id,assessmentTitle, content) VALUES
-- (1,'Beginner Spanish Quiz', 'A quiz covering greetings, numbers, and colors.'),
-- (1,'Mid-term Assessment Spanish', 'An in-depth assessment on verbs, conjugation, and basic grammar.'),
-- (1,'Final Exam: Spanish Basics', 'Comprehensive final exam covering all introductory Spanish topics.'),
-- (2,'Beginner French Quiz', 'A quiz covering idioms, subjunctive mood, and literature.'),
-- (2,'Mid-term Assessment French', 'An in-depth assessment on French grammar and language usage.'),
-- (2,'Final Exam: Intermediate French', 'Comprehensive final exam covering all intermediate French topics.'),
-- (3,'Beginner Japanese Quiz', 'A quiz covering advanced Kanji, business etiquette, and history.'),
-- (3,'Mid-term Assessment Japanese', 'An in-depth assessment on Japanese culture and language.'),
-- (3,'Final Exam: Advanced Japanese', 'Comprehensive final exam covering all advanced Japanese topics.'),
-- (4,'Beginner Mandarin Quiz', 'A quiz covering basic phrases, characters, and numbers in Mandarin Chinese.'),
-- (4,'Mid-term Assessment Mandarin', 'An in-depth assessment on Mandarin grammar and vocabulary.'),
-- (4,'Final Exam: Mandarin Basics', 'Comprehensive final exam covering all introductory Mandarin Chinese topics.');

-- INSERT INTO srsContent (lesson_id, content, intervalLevel) VALUES
-- -- Spanish Greetings
-- (1, 'Quiz: Recognize Spanish greetings and farewells', 1),
-- (1, 'Flashcards: Practice Spanish greetings in various contexts', 2),
-- (1, 'Interactive Dialogue: Use greetings in a conversation', 3),

-- -- Numbers and Colors in Spanish
-- (2, 'Quiz: Identify numbers 1-100 and primary colors in Spanish', 1),
-- (2, 'Flashcards: Practice numbers and colors in Spanish', 2),
-- (2, 'Interactive Exercise: Use numbers and colors in sentences', 3),

-- -- Basic Spanish Verbs
-- (3, 'Quiz: Conjugate essential Spanish verbs', 1),
-- (3, 'Flashcards: Practice verb conjugations in different tenses', 2),
-- (3, 'Role Play: Form sentences using basic verbs in conversation', 3),

-- -- Spanish Conversation Practice
-- (4, 'Listening Task: Identify key phrases in a Spanish conversation', 1),
-- (4, 'Dialogue Completion: Fill in the blanks in conversation snippets', 2),
-- (4, 'Interactive Dialogue: Engage in a simulated Spanish conversation', 3),

-- -- French Idioms and Expressions
-- (5, 'Matching Exercise: Match French idioms to their meanings', 1),
-- (5, 'Fill-in-the-Blank: Use idioms in context', 2),
-- (5, 'Creative Writing: Incorporate idioms into a short paragraph', 3),

-- -- French Subjunctive Mood
-- (6, 'Multiple Choice Quiz: Identify subjunctive mood usage', 1),
-- (6, 'Sentence Construction: Form sentences using the subjunctive mood', 2),
-- (6, 'Dialogue Writing: Create dialogues that include subjunctive expressions', 3),

-- -- French Literature Overview
-- (7, 'Trivia: Facts about French authors and their works', 1),
-- (7, 'Analysis Questions: Discuss themes in French literature', 2),
-- (7, 'Essay Writing: Analyze a piece of French literature', 3),

-- -- French Film and Cinema
-- (8, 'Quiz: History of French cinema', 1),
-- (8, 'Discussion: Impact of key French films', 2),
-- (8, 'Review Writing: Write a review of a French film', 3),

-- -- Advanced Kanji Characters
-- (9, 'Flashcards: Review advanced Kanji characters', 1),
-- (9, 'Writing Practice: Write Kanji characters from memory', 2),
-- (9, 'Kanji Usage: Construct sentences using advanced Kanji', 3),

-- -- Japanese Business Etiquette
-- (10, 'Quiz: Basic norms of Japanese business etiquette', 1),
-- (10, 'Role-Playing: Practice business introductions in Japanese', 2),
-- (10, 'Case Study: Analyze a business meeting scenario', 3),

-- -- Japanese History and Culture
-- (11, 'Timeline Activity: Arrange historical events in order', 1),
-- (11, 'Discussion: Influence of key cultural periods', 2),
-- (11, 'Presentation: Prepare a talk on a Japanese cultural aspect', 3),

-- -- Japanese Poetry and Haiku
-- (12, 'Matching Exercise: Match Haikus to their authors', 1),
-- (12, 'Writing Practice: Compose your own Haiku', 2),
-- (12, 'Analysis: Discuss the themes of famous Haikus', 3),

-- -- Chinese Numbers and Counters
-- (13, 'Flashcards: Learn to count in Chinese and use counters', 1),
-- (13, 'Matching Exercise: Match numbers with their corresponding counters', 2),
-- (13, 'Practice Quiz: Use numbers and counters in sentences', 3),

-- -- Chinese Family and Relationships
-- (14, 'Vocabulary Drill: Memorize terms for family members and relationships', 1),
-- (14, 'Role Play: Introduce your family members in Chinese', 2),
-- (14, 'Discussion: Talk about your family and relationships using Chinese', 3),

-- -- Chinese Holidays and Traditions
-- (15, 'Multiple Choice Quiz: Identify major Chinese holidays and their traditions', 1),
-- (15, 'Creative Writing: Describe how a Chinese holiday is celebrated', 2),
-- (15, 'Presentation: Prepare a short presentation on a Chinese tradition', 3),

-- -- Chinese Food and Dining Vocabulary
-- (16, 'Vocabulary Drill: Learn vocabulary related to Chinese food and dining', 1),
-- (16, 'Ordering Exercise: Practice ordering food in a Chinese restaurant scenario', 2),
-- (16, 'Cooking Class: Discuss ingredients and cooking methods for a Chinese dish', 3);




--  INSERT INTO enrollment(student_id,course_id,enrollmentDate) VALUES
-- ('1','2','2023-09-25'),
-- ('1', '3', '2022-05-06'),
-- ('7', '4', '2022-12-24'),
-- ('14', '3', '2023-05-01'),
-- ('13', '1', '2023-01-01'),
-- ('9', '1', '2022-02-15'),
-- ('3', '3', '2023-06-06'),
-- ('5', '2', '2023-05-11'),
-- ('9', '3', '2023-03-16'),
-- ('2', '3', '2023-06-18');




-- -- Insert Assessment 
-- INSERT INTO assessmentProgress(enrollment_id, assessments_id, completed, mark)
-- SELECT e.id, ca.id, FALSE, 0
-- FROM enrollment e
-- JOIN assessments ca ON e.course_id = ca.courses_id;
-- -- Insert Lesson 
-- INSERT INTO lessonProgress(enrollment_id, lessons_id, completed, lastAccessed)
-- SELECT e.id, ca.id, FALSE, null
-- FROM enrollment e
-- JOIN lessons ca ON e.course_id = ca.courses_id;




 

-- SELECT * FROM courses;
-- SELECT * from enrollment;
-- SELECT * FROM assessments;
-- SELECT * FROM students;
-- SELECT * FROM assessmentProgress;
-- CREATE INDEX idx_student_firstName ON students(firstName);
-- SHOW INDEX FROM students;
-- SELECT * FROM students ORDER BY firstName;
-- SELECT * FROM STUDENTS;
-- SELECT * FROM ENROLLMENT;
-- SELECT * FROM students WHERE firstName = 'Ryan';
-- DROP INDEX idx_student_firstName ON students;



-- EXPLAIN SELECT * FROM students WHERE firstName = 'BingWei';


-- CREATE VIEW StudentEnrollmentDetails AS
-- SELECT s.id AS StudentID, CONCAT(s.firstName, ' ', s.lastName) AS StudentName, s.email, c.courseName, c.difficultyLevel, e.enrollmentDate
-- FROM students s
-- INNER JOIN enrollment e ON s.id = e.student_id
-- INNER JOIN courses c ON e.course_id = c.id;

-- CREATE VIEW CourseLessonContent AS
-- SELECT c.courseName, l.lessonTitle, l.contentURL
-- FROM courses c
-- INNER JOIN lessons l ON c.id = l.courses_id;

-- CREATE VIEW StudentAssessmentProgress AS
-- SELECT s.id AS StudentID, CONCAT(s.firstName, ' ', s.lastName) AS StudentName, c.courseName, a.assessmentTitle, ap.completed, ap.MARK
-- FROM students s
-- INNER JOIN enrollment e ON s.id = e.student_id
-- INNER JOIN courses c ON e.course_id = c.id
-- INNER JOIN assessments a ON c.id = a.courses_id
-- INNER JOIN assessmentProgress ap ON a.id = ap.assessments_id AND e.id = ap.enrollment_id;





-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2024-01-01' WHERE enrollment_id =10  AND lessons_id IN(9,10);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate, currentLevel)	VALUES
-- (33,'2024-01-02',1),
-- (34,'2024-01-06',1);
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 22 WHERE enrollment_id=10 and assessments_id=7 ;

-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2023-12-25' WHERE enrollment_id =2  AND lessons_id IN(9);
-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2023-12-31' WHERE enrollment_id =2  AND lessons_id IN(10,11);
-- UPDATE lessonProgress SET lastAccessed = '2024-02-02' WHERE enrollment_id =2  AND lessons_id IN(12);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate,completed, currentLevel) VALUES (17,NULL,TRUE,3);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate, currentLevel)	VALUES
-- (18,'2024-02-05',3),
-- (19,'2024-02-10',2);
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 100 WHERE enrollment_id=2 and assessments_id=7 ;
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 80 WHERE enrollment_id=2 and assessments_id=8 ;


-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2024-02-14' WHERE enrollment_id =5  AND lessons_id IN(1);
-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2024-02-15' WHERE enrollment_id =5  AND lessons_id IN(2,3);
-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2024-02-18' WHERE enrollment_id =5  AND lessons_id IN(4);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate,completed, currentLevel) VALUES (1,NULL,TRUE,3),(2,NULL,TRUE,3),(3,NULL,TRUE,3);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate, currentLevel)	VALUES
-- (4,'2024-02-06',2);
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 70 WHERE enrollment_id=5 and assessments_id=1 ;
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 60 WHERE enrollment_id=5 and assessments_id=2 ;


-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2024-02-15' WHERE enrollment_id =6  AND lessons_id IN(1);
-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2024-03-01' WHERE enrollment_id =6  AND lessons_id IN(2,3);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate,completed, currentLevel) VALUES (5,NULL,TRUE,3),(6,NULL,TRUE,3);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate, currentLevel)VALUES (7,'2024-03-02',1);
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 90 WHERE enrollment_id=6 and assessments_id=1 ;
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 80 WHERE enrollment_id=6 and assessments_id=2 ;

-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2023-11-15' WHERE enrollment_id =1  AND lessons_id IN(5);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate, currentLevel)	VALUES
-- (9,'2023-11-17',1);
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 100 WHERE enrollment_id=1 and assessments_id=4 ;


-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2024-04-15' WHERE enrollment_id =4  AND lessons_id IN(9,10);
-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2024-04-20' WHERE enrollment_id =4  AND lessons_id IN(11,12);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate,completed, currentLevel) VALUES (21,NULL,TRUE,3);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate, currentLevel) VALUES
-- (22,'2024-04-21',3),(23,'2024-04-23',2),(24,'2024-04-24',1);
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 100 WHERE enrollment_id=4 and assessments_id=7 ;
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 40 WHERE enrollment_id=4 and assessments_id=8 ;


-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2024-06-15' WHERE enrollment_id =7  AND lessons_id IN(9,10);
-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2024-06-20' WHERE enrollment_id =7  AND lessons_id IN(11,12);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate,completed, currentLevel) VALUES (25,NULL,TRUE,3);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate, currentLevel) VALUES
-- (26,'2024-06-21',3),(27,'2024-06-23',2),(28,'2024-06-24',1);
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 30 WHERE enrollment_id=7 and assessments_id=7 ;
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 55 WHERE enrollment_id=7 and assessments_id=8 ;


-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2023-12-15' WHERE enrollment_id =9  AND lessons_id IN(9,10);
-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2023-12-20' WHERE enrollment_id =9  AND lessons_id IN(11,12);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate,completed, currentLevel) VALUES (29,NULL,TRUE,3);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate, currentLevel) VALUES
-- (30,'2023-12-21',3),(31,'2023-12-23',2),(32,'2023-12-24',1);
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 55 WHERE enrollment_id=9 and assessments_id=7 ;
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 60 WHERE enrollment_id=9 and assessments_id=8 ;



-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2023-12-15' WHERE enrollment_id =3  AND lessons_id IN(13,14);
-- UPDATE lessonProgress SET completed=TRUE, lastAccessed = '2023-12-20' WHERE enrollment_id =3  AND lessons_id IN(15,16);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate,completed, currentLevel) VALUES (37,NULL,TRUE,3),(38,NULL,TRUE,3);
-- INSERT INTO srsSchedule (lessonProgress_id ,nextReviewDate, currentLevel) VALUES
-- (39,'2024-01-23',2),(40,'2024-01-24',1);
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 55 WHERE enrollment_id=3 and assessments_id=10 ;
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 70 WHERE enrollment_id=3 and assessments_id=11 ;
-- UPDATE assessmentProgress SET Completed = TRUE, MARK = 80 WHERE enrollment_id=3 and assessments_id=12 ;
