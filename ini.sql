DROP TABLE IF EXISTS incidentReport;

SET time_zone = '+00:00';

CREATE TABLE incidentReport (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    comments VARCHAR(255),
    lat FLOAT( 10, 6 ) NOT NULL,
    lng FLOAT( 10, 6 ) NOT NULL,
    iconmarker VARCHAR(15) NOT NULL,
    dt DATETIME
);