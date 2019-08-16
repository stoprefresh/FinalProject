-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema qrxdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `qrxdb` ;

-- -----------------------------------------------------
-- Schema qrxdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `qrxdb` DEFAULT CHARACTER SET utf8 ;
USE `qrxdb` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `active` TINYINT NULL,
  `role` VARCHAR(20) NULL,
  `create_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blood_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `blood_type` ;

CREATE TABLE IF NOT EXISTS `blood_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `aborh` VARCHAR(10) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `aborh_UNIQUE` (`aborh` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `patient`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `patient` ;

CREATE TABLE IF NOT EXISTS `patient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `qrcode_url` VARCHAR(1500) NULL,
  `title` VARCHAR(1000) NULL,
  `first_name` VARCHAR(1000) NULL,
  `last_name` VARCHAR(1000) NULL,
  `middle_name` VARCHAR(1000) NULL,
  `preffered_name` VARCHAR(1000) NULL,
  `email` VARCHAR(250) NULL,
  `address` VARCHAR(2000) NULL,
  `phone` VARCHAR(45) NULL,
  `has_dnr` TINYINT NULL,
  `birth_date` DATE NULL,
  `gender_identity` VARCHAR(100) NULL,
  `anatomical_sex` VARCHAR(100) NULL,
  `height` DECIMAL(5,2) NULL,
  `weight` DECIMAL(5,2) NULL,
  `blood_type_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_patient_user1_idx` (`user_id` ASC),
  INDEX `fk_patient_blood_type1_idx` (`blood_type_id` ASC),
  CONSTRAINT `fk_patient_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_patient_blood_type1`
    FOREIGN KEY (`blood_type_id`)
    REFERENCES `blood_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `drug`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `drug` ;

CREATE TABLE IF NOT EXISTS `drug` (
  `PRODUCTNDC` VARCHAR(10) NOT NULL,
  `PRODUCTTYPENAME` VARCHAR(500) NULL,
  `PROPRIETARYNAME` VARCHAR(500) NULL,
  `PROPRIETARYNAMESUFFIX` VARCHAR(500) NULL,
  `NONPROPRIETARYNAME` VARCHAR(500) NULL,
  `DOSAGEFORMNAME` VARCHAR(500) NULL,
  `ROUTENAME` VARCHAR(500) NULL,
  `ACTIVE_NUMERATOR_STRENGTH` VARCHAR(45) NULL,
  `ACTIVE_INGRED_UNIT` VARCHAR(45) NULL,
  `PHARM_CLASSES` TEXT NULL,
  PRIMARY KEY (`PRODUCTNDC`),
  UNIQUE INDEX `PRODUCTNDC_UNIQUE` (`PRODUCTNDC` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `provider`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `provider` ;

CREATE TABLE IF NOT EXISTS `provider` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `organization` VARCHAR(450) NULL,
  `subunit` VARCHAR(450) NULL,
  `type` VARCHAR(450) NULL,
  `phone` VARCHAR(45) NULL,
  `email` VARCHAR(250) NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_provider_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_provider_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medication`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `medication` ;

CREATE TABLE IF NOT EXISTS `medication` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_ndc` VARCHAR(10) NOT NULL,
  `patient_id` INT NOT NULL,
  `start_date` DATE NULL,
  `stop_date` DATE NULL,
  `name` VARCHAR(45) NULL,
  `directions` VARCHAR(1000) NULL,
  `reason_discontinued` VARCHAR(45) NULL,
  INDEX `fk_patient_has_drug_drug1_idx` (`product_ndc` ASC),
  INDEX `fk_patient_has_drug_patient1_idx` (`patient_id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_patient_has_drug_drug1`
    FOREIGN KEY (`product_ndc`)
    REFERENCES `drug` (`PRODUCTNDC`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_patient_has_drug_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `personal_note`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `personal_note` ;

CREATE TABLE IF NOT EXISTS `personal_note` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `patient_id` INT NOT NULL,
  `text_content` TEXT NULL,
  `create_date` DATETIME NOT NULL,
  `update_date` DATETIME NULL,
  `provider_id` INT NULL,
  `medication_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_note_patient1_idx` (`patient_id` ASC),
  INDEX `fk_personal_note_provider1_idx` (`provider_id` ASC),
  INDEX `fk_personal_note_medication1_idx` (`medication_id` ASC),
  CONSTRAINT `fk_note_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_personal_note_provider1`
    FOREIGN KEY (`provider_id`)
    REFERENCES `provider` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_personal_note_medication1`
    FOREIGN KEY (`medication_id`)
    REFERENCES `medication` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `allergy`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `allergy` ;

CREATE TABLE IF NOT EXISTS `allergy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `agent` VARCHAR(45) NULL,
  `reaction` VARCHAR(45) NULL,
  `patient_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_allergy_patient1_idx` (`patient_id` ASC),
  CONSTRAINT `fk_allergy_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emergency_contact`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `emergency_contact` ;

CREATE TABLE IF NOT EXISTS `emergency_contact` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(1000) NULL,
  `last_name` VARCHAR(1000) NULL,
  `phone` VARCHAR(45) NULL,
  `relationship` VARCHAR(450) NOT NULL,
  `email` VARCHAR(250) NULL,
  `patient_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_EmergencyContact_patient1_idx` (`patient_id` ASC),
  CONSTRAINT `fk_EmergencyContact_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `approved_provider`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `approved_provider` ;

CREATE TABLE IF NOT EXISTS `approved_provider` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `patient_id` INT NOT NULL,
  `provider_id` INT NOT NULL,
  INDEX `fk_patient_has_provider_patient2_idx` (`patient_id` ASC),
  INDEX `fk_patient_has_provider_provider2_idx` (`provider_id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_patient_has_provider_patient2`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_patient_has_provider_provider2`
    FOREIGN KEY (`provider_id`)
    REFERENCES `provider` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `diagnosis`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `diagnosis` ;

CREATE TABLE IF NOT EXISTS `diagnosis` (
  `id` INT NOT NULL,
  `patient_id` INT NOT NULL,
  `medication_id` INT NULL,
  `date_assoc` DATE NULL,
  `date_resolved` DATE NULL,
  `icd_10` VARCHAR(150) NULL,
  `name` VARCHAR(150) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_patient_has_diagnosis_patient1_idx` (`patient_id` ASC),
  INDEX `fk_patient_has_diagnosis_medication1_idx` (`medication_id` ASC),
  CONSTRAINT `fk_patient_has_diagnosis_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_patient_has_diagnosis_medication1`
    FOREIGN KEY (`medication_id`)
    REFERENCES `medication` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS qrxuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'qrxuser'@'localhost' IDENTIFIED BY 'qrxuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'qrxuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`) VALUES (1, 'jsmith', 'test', 1, 'ems', '2019-08-14 11:27:52');
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`) VALUES (2, 'jldoe', 'test', 1, 'patient', '2019-08-15 09:27:52');

COMMIT;


-- -----------------------------------------------------
-- Data for table `blood_type`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `blood_type` (`id`, `aborh`) VALUES (1, 'AB+');
INSERT INTO `blood_type` (`id`, `aborh`) VALUES (2, 'AB-');
INSERT INTO `blood_type` (`id`, `aborh`) VALUES (3, 'A-');
INSERT INTO `blood_type` (`id`, `aborh`) VALUES (4, 'A+');
INSERT INTO `blood_type` (`id`, `aborh`) VALUES (5, 'B-');
INSERT INTO `blood_type` (`id`, `aborh`) VALUES (6, 'B+');
INSERT INTO `blood_type` (`id`, `aborh`) VALUES (7, 'O-');
INSERT INTO `blood_type` (`id`, `aborh`) VALUES (8, 'O+');

COMMIT;


-- -----------------------------------------------------
-- Data for table `patient`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `patient` (`id`, `user_id`, `qrcode_url`, `title`, `first_name`, `last_name`, `middle_name`, `preffered_name`, `email`, `address`, `phone`, `has_dnr`, `birth_date`, `gender_identity`, `anatomical_sex`, `height`, `weight`, `blood_type_id`) VALUES (1, 2, '/api/qrx/patient/1', 'Mrs.', 'Jane', 'Doe', 'Lucy', 'Mary', 'jdoe@comcast.net', '2342 N. Sprinter Pwky, Denver, CO 80111', '303-678-9870', 0, '1960-07-15', 'Woman', 'Female', 63.7, 170.6, 4);

COMMIT;


-- -----------------------------------------------------
-- Data for table `drug`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `drug` (`PRODUCTNDC`, `PRODUCTTYPENAME`, `PROPRIETARYNAME`, `PROPRIETARYNAMESUFFIX`, `NONPROPRIETARYNAME`, `DOSAGEFORMNAME`, `ROUTENAME`, `ACTIVE_NUMERATOR_STRENGTH`, `ACTIVE_INGRED_UNIT`, `PHARM_CLASSES`) VALUES ('0002-0800', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`PRODUCTNDC`, `PRODUCTTYPENAME`, `PROPRIETARYNAME`, `PROPRIETARYNAMESUFFIX`, `NONPROPRIETARYNAME`, `DOSAGEFORMNAME`, `ROUTENAME`, `ACTIVE_NUMERATOR_STRENGTH`, `ACTIVE_INGRED_UNIT`, `PHARM_CLASSES`) VALUES ('0002-1200', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`PRODUCTNDC`, `PRODUCTTYPENAME`, `PROPRIETARYNAME`, `PROPRIETARYNAMESUFFIX`, `NONPROPRIETARYNAME`, `DOSAGEFORMNAME`, `ROUTENAME`, `ACTIVE_NUMERATOR_STRENGTH`, `ACTIVE_INGRED_UNIT`, `PHARM_CLASSES`) VALUES ('0002-1407', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`PRODUCTNDC`, `PRODUCTTYPENAME`, `PROPRIETARYNAME`, `PROPRIETARYNAMESUFFIX`, `NONPROPRIETARYNAME`, `DOSAGEFORMNAME`, `ROUTENAME`, `ACTIVE_NUMERATOR_STRENGTH`, `ACTIVE_INGRED_UNIT`, `PHARM_CLASSES`) VALUES ('0002-1433', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`PRODUCTNDC`, `PRODUCTTYPENAME`, `PROPRIETARYNAME`, `PROPRIETARYNAMESUFFIX`, `NONPROPRIETARYNAME`, `DOSAGEFORMNAME`, `ROUTENAME`, `ACTIVE_NUMERATOR_STRENGTH`, `ACTIVE_INGRED_UNIT`, `PHARM_CLASSES`) VALUES ('0002-1434', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`PRODUCTNDC`, `PRODUCTTYPENAME`, `PROPRIETARYNAME`, `PROPRIETARYNAMESUFFIX`, `NONPROPRIETARYNAME`, `DOSAGEFORMNAME`, `ROUTENAME`, `ACTIVE_NUMERATOR_STRENGTH`, `ACTIVE_INGRED_UNIT`, `PHARM_CLASSES`) VALUES ('0002-1436', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`PRODUCTNDC`, `PRODUCTTYPENAME`, `PROPRIETARYNAME`, `PROPRIETARYNAMESUFFIX`, `NONPROPRIETARYNAME`, `DOSAGEFORMNAME`, `ROUTENAME`, `ACTIVE_NUMERATOR_STRENGTH`, `ACTIVE_INGRED_UNIT`, `PHARM_CLASSES`) VALUES ('0002-1445', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`PRODUCTNDC`, `PRODUCTTYPENAME`, `PROPRIETARYNAME`, `PROPRIETARYNAMESUFFIX`, `NONPROPRIETARYNAME`, `DOSAGEFORMNAME`, `ROUTENAME`, `ACTIVE_NUMERATOR_STRENGTH`, `ACTIVE_INGRED_UNIT`, `PHARM_CLASSES`) VALUES ('0002-2377', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`PRODUCTNDC`, `PRODUCTTYPENAME`, `PROPRIETARYNAME`, `PROPRIETARYNAMESUFFIX`, `NONPROPRIETARYNAME`, `DOSAGEFORMNAME`, `ROUTENAME`, `ACTIVE_NUMERATOR_STRENGTH`, `ACTIVE_INGRED_UNIT`, `PHARM_CLASSES`) VALUES ('0002-3004', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`PRODUCTNDC`, `PRODUCTTYPENAME`, `PROPRIETARYNAME`, `PROPRIETARYNAMESUFFIX`, `NONPROPRIETARYNAME`, `DOSAGEFORMNAME`, `ROUTENAME`, `ACTIVE_NUMERATOR_STRENGTH`, `ACTIVE_INGRED_UNIT`, `PHARM_CLASSES`) VALUES ('0002-3115', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `provider`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `provider` (`id`, `organization`, `subunit`, `type`, `phone`, `email`, `user_id`) VALUES (1, 'Denver Metro Ambulance', 'Unit 23', 'prehospital', '303-567-8976', 'unit23@dma.org', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `medication`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `medication` (`id`, `product_ndc`, `patient_id`, `start_date`, `stop_date`, `name`, `directions`, `reason_discontinued`) VALUES (1, '0002-0800', 1, '2019-08-15', NULL, NULL, 'metformin 500mg bid', NULL);
INSERT INTO `medication` (`id`, `product_ndc`, `patient_id`, `start_date`, `stop_date`, `name`, `directions`, `reason_discontinued`) VALUES (2, '0002-1200', 1, '2019-08-15', NULL, NULL, 'Humalog Injection Kwikpen 12U SQ before meals', NULL);
INSERT INTO `medication` (`id`, `product_ndc`, `patient_id`, `start_date`, `stop_date`, `name`, `directions`, `reason_discontinued`) VALUES (3, '0002-1407', 1, '2019-08-15', NULL, NULL, 'Lantus 5U SQ qAM', NULL);
INSERT INTO `medication` (`id`, `product_ndc`, `patient_id`, `start_date`, `stop_date`, `name`, `directions`, `reason_discontinued`) VALUES (4, '0002-1433', 1, '2019-08-15', NULL, NULL, 'losartan 50mg qd', NULL);
INSERT INTO `medication` (`id`, `product_ndc`, `patient_id`, `start_date`, `stop_date`, `name`, `directions`, `reason_discontinued`) VALUES (5, '0002-1434', 1, '2019-08-15', NULL, NULL, 'sertraline 50mg bid', NULL);
INSERT INTO `medication` (`id`, `product_ndc`, `patient_id`, `start_date`, `stop_date`, `name`, `directions`, `reason_discontinued`) VALUES (6, '0002-1436', 1, '2019-08-15', NULL, NULL, 'quetiapine 150mg bid', NULL);
INSERT INTO `medication` (`id`, `product_ndc`, `patient_id`, `start_date`, `stop_date`, `name`, `directions`, `reason_discontinued`) VALUES (7, '0002-1445', 1, '2019-08-15', NULL, NULL, 'Symbicort 160/4.5 2 puffs PO bid', NULL);
INSERT INTO `medication` (`id`, `product_ndc`, `patient_id`, `start_date`, `stop_date`, `name`, `directions`, `reason_discontinued`) VALUES (8, '0002-2377', 1, '2019-08-15', NULL, NULL, 'Proair 2 puffs PO q4-6h prn cough/SOB', NULL);
INSERT INTO `medication` (`id`, `product_ndc`, `patient_id`, `start_date`, `stop_date`, `name`, `directions`, `reason_discontinued`) VALUES (9, '0002-3004', 1, '2019-08-15', NULL, NULL, 'montelukast 10mg qhs', NULL);
INSERT INTO `medication` (`id`, `product_ndc`, `patient_id`, `start_date`, `stop_date`, `name`, `directions`, `reason_discontinued`) VALUES (10, '0002-3115', 1, '2019-08-15', NULL, NULL, 'zolpidem 5mg PO qhs', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `personal_note`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `personal_note` (`id`, `patient_id`, `text_content`, `create_date`, `update_date`, `provider_id`, `medication_id`) VALUES (1, 1, 'starting to feel a little dizzy and I keep waking up to use the bathroom a lot', '2019-08-15 09:27:52', NULL, 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `allergy`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `allergy` (`id`, `agent`, `reaction`, `patient_id`) VALUES (1, 'Penicillin', 'severe hives', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `emergency_contact`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `emergency_contact` (`id`, `first_name`, `last_name`, `phone`, `relationship`, `email`, `patient_id`) VALUES (1, 'Joe', 'Doe', '303-555-5555', 'husband', 'joedoe@doe.com', 1);
INSERT INTO `emergency_contact` (`id`, `first_name`, `last_name`, `phone`, `relationship`, `email`, `patient_id`) VALUES (2, 'Joel', 'Doe', '303-555-5551', 'son', 'joeld@doe.com', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `approved_provider`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `approved_provider` (`id`, `patient_id`, `provider_id`) VALUES (1, 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `diagnosis`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `diagnosis` (`id`, `patient_id`, `medication_id`, `date_assoc`, `date_resolved`, `icd_10`, `name`) VALUES (1, 1, 1, '2005-07-15', NULL, 'E11.9', 'Diabetes Mellutis Type 2 w/o Complication');
INSERT INTO `diagnosis` (`id`, `patient_id`, `medication_id`, `date_assoc`, `date_resolved`, `icd_10`, `name`) VALUES (2, 1, 2, '2015-07-15', NULL, 'I10', 'Essential Hypertension');
INSERT INTO `diagnosis` (`id`, `patient_id`, `medication_id`, `date_assoc`, `date_resolved`, `icd_10`, `name`) VALUES (3, 1, 3, '2018-07-08', NULL, 'F33.0', 'Major Depressive Disorder');
INSERT INTO `diagnosis` (`id`, `patient_id`, `medication_id`, `date_assoc`, `date_resolved`, `icd_10`, `name`) VALUES (4, 1, 4, '1995-12-24', NULL, 'J44.9', 'COPD');
INSERT INTO `diagnosis` (`id`, `patient_id`, `medication_id`, `date_assoc`, `date_resolved`, `icd_10`, `name`) VALUES (5, 1, 5, '2014-09-15', NULL, 'G47.00', 'Insomnia');

COMMIT;

