DROP TABLE IF EXISTS incidentReport;

SET time_zone = '+00:00';

CREATE TABLE incidentReport (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    comments VARCHAR(255),
    lat FLOAT( 10, 6 ) NOT NULL,
    lng FLOAT( 10, 6 ) NOT NULL,
    marker VARCHAR(20) NOT NULL,
    dt DATETIME,
    PRIMARY KEY (id)
);

