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
  `active` TINYINT NOT NULL DEFAULT 1,
  `role` VARCHAR(20) NULL,
  `create_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `title` VARCHAR(45) NULL,
  `first_name` VARCHAR(100) NULL,
  `middle_name` VARCHAR(100) NULL,
  `last_name` VARCHAR(100) NULL,
  `email` VARCHAR(250) NULL,
  `phone` VARCHAR(21) NULL,
  `street` VARCHAR(1000) NULL,
  `city` VARCHAR(450) NULL,
  `state` CHAR(2) NULL,
  `zip` CHAR(5) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blood_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `blood_type` ;

CREATE TABLE IF NOT EXISTS `blood_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `abo` VARCHAR(10) NOT NULL,
  `rh` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `patient`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `patient` ;

CREATE TABLE IF NOT EXISTS `patient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `qrcode_url` VARCHAR(1500) NULL,
  `has_dnr` TINYINT NULL,
  `birth_date` DATE NULL,
  `anatomical_sex` VARCHAR(100) NULL,
  `height_inches` DECIMAL(5,2) NULL,
  `weight_lbs` DECIMAL(5,2) NULL,
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
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` VARCHAR(500) NULL,
  `product_ndc` VARCHAR(500) NULL,
  `product_type_name` VARCHAR(500) NULL,
  `proprietary_name` VARCHAR(500) NULL,
  `proprietary_name_suffix` VARCHAR(500) NULL,
  `nonproprietary_name` VARCHAR(500) NULL,
  `dosage_form_name` VARCHAR(500) NULL,
  `route_name` VARCHAR(45) NULL,
  `active_numerator_strength` VARCHAR(45) NULL,
  `active_ingredient_unit` TEXT NULL,
  `pharm_classes` VARCHAR(45) NULL,
  `img_url` VARCHAR(4500) NULL,
  `reference_url` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `PRODUCTNDC_UNIQUE` (`product_id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `provider`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `provider` ;

CREATE TABLE IF NOT EXISTS `provider` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `organization` VARCHAR(450) NULL,
  `subunit` VARCHAR(450) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_provider_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_provider_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
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
  `date_approved` DATE NULL,
  `active` TINYINT NULL DEFAULT 1,
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
  `id` INT NOT NULL AUTO_INCREMENT,
  `patient_id` INT NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `date_diagnosed` VARCHAR(150) NULL,
  `date_resolved` VARCHAR(150) NULL,
  `icd_10` VARCHAR(150) NULL,
  `active` TINYINT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_patient_has_diagnosis_patient1_idx` (`patient_id` ASC),
  CONSTRAINT `fk_patient_has_diagnosis_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medication`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `medication` ;

CREATE TABLE IF NOT EXISTS `medication` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `patient_id` INT NOT NULL,
  `medication_name` VARCHAR(450) NOT NULL,
  `drug_id` INT NULL,
  `start_date` DATE NULL,
  `stop_date` DATE NULL,
  `directions` TEXT NULL,
  `reason_discontinued` TEXT NULL,
  `approved_provider_id` INT NULL,
  `diagnosis_id` INT NULL,
  `active` TINYINT NULL,
  INDEX `fk_patient_has_drug_patient1_idx` (`patient_id` ASC),
  PRIMARY KEY (`id`),
  INDEX `fk_medication_drug1_idx` (`drug_id` ASC),
  INDEX `fk_medication_approved_provider1_idx` (`approved_provider_id` ASC),
  INDEX `fk_medication_diagnosis1_idx` (`diagnosis_id` ASC),
  CONSTRAINT `fk_patient_has_drug_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_medication_drug1`
    FOREIGN KEY (`drug_id`)
    REFERENCES `drug` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_medication_approved_provider1`
    FOREIGN KEY (`approved_provider_id`)
    REFERENCES `approved_provider` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_medication_diagnosis1`
    FOREIGN KEY (`diagnosis_id`)
    REFERENCES `diagnosis` (`id`)
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
  `text_content` TEXT NOT NULL,
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL,
  `medication_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_note_patient1_idx` (`patient_id` ASC),
  INDEX `fk_personal_note_medication1_idx` (`medication_id` ASC),
  CONSTRAINT `fk_note_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
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
  `patient_id` INT NOT NULL,
  `allergen` VARCHAR(450) NULL,
  `reaction` TEXT NULL,
  `active` TINYINT NULL,
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
  `patient_id` INT NOT NULL,
  `relationship` VARCHAR(450) NULL,
  `first_name` VARCHAR(100) NULL,
  `last_name` VARCHAR(100) NULL,
  `phone` VARCHAR(21) NULL,
  `email` VARCHAR(250) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_EmergencyContact_patient1_idx` (`patient_id` ASC),
  CONSTRAINT `fk_EmergencyContact_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
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
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`) VALUES (1, 'dmaunit23', 'test', 1, 'ems', '2019-08-14 11:27:52', NULL, 'John', 'C', 'Smith', 'jcsmith@dma.org', '303-555-5155', '123 Java Rd', 'Denver', 'CO', '80111');
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`) VALUES (2, 'jldoe', 'test', 1, 'patient', '2019-08-15 09:27:52', NULL, 'Jane', 'Lindsey', 'Doe', 'jldoe@doe.com', '303-555-5155', '8072 Angular Rd', 'Englewood', 'CO', '80110');
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`) VALUES (3, 'admin', 'test', 1, 'admin', '2019-08-14 05:27:52', NULL, 'QRXAdmin', 'Admin', 'Admin', 'admin@qrx.com', '303-555-5155', '9070 Spring Tool Street', 'Englewood', 'CO', '80110');
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`) VALUES (4, 'ksmith1', 'test', 1, 'physician', '2019-08-14 05:27:52', 'MD', 'Kevin', 'W', 'Smith', 'kws@group.com', '303-555-5155', '4032 Bit drive', 'Denver', 'CO', '80111');

COMMIT;


-- -----------------------------------------------------
-- Data for table `blood_type`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `blood_type` (`id`, `abo`, `rh`) VALUES (1, 'AB', 0);
INSERT INTO `blood_type` (`id`, `abo`, `rh`) VALUES (2, 'AB', 1);
INSERT INTO `blood_type` (`id`, `abo`, `rh`) VALUES (3, 'A', 0);
INSERT INTO `blood_type` (`id`, `abo`, `rh`) VALUES (4, 'A', 1);
INSERT INTO `blood_type` (`id`, `abo`, `rh`) VALUES (5, 'B', 0);
INSERT INTO `blood_type` (`id`, `abo`, `rh`) VALUES (6, 'B', 1);
INSERT INTO `blood_type` (`id`, `abo`, `rh`) VALUES (7, 'O', 0);
INSERT INTO `blood_type` (`id`, `abo`, `rh`) VALUES (8, 'O', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `patient`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `patient` (`id`, `user_id`, `qrcode_url`, `has_dnr`, `birth_date`, `anatomical_sex`, `height_inches`, `weight_lbs`, `blood_type_id`) VALUES (1, 2, '/api/qrx/patient/1', 0, '1960-07-15', 'Female', 63.7, 170.6, 4);

COMMIT;


-- -----------------------------------------------------
-- Data for table `drug`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `drug` (`id`, `product_id`, `product_ndc`, `product_type_name`, `proprietary_name`, `proprietary_name_suffix`, `nonproprietary_name`, `dosage_form_name`, `route_name`, `active_numerator_strength`, `active_ingredient_unit`, `pharm_classes`, `img_url`, `reference_url`) VALUES (118004, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`id`, `product_id`, `product_ndc`, `product_type_name`, `proprietary_name`, `proprietary_name_suffix`, `nonproprietary_name`, `dosage_form_name`, `route_name`, `active_numerator_strength`, `active_ingredient_unit`, `pharm_classes`, `img_url`, `reference_url`) VALUES (80, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`id`, `product_id`, `product_ndc`, `product_type_name`, `proprietary_name`, `proprietary_name_suffix`, `nonproprietary_name`, `dosage_form_name`, `route_name`, `active_numerator_strength`, `active_ingredient_unit`, `pharm_classes`, `img_url`, `reference_url`) VALUES (1835, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`id`, `product_id`, `product_ndc`, `product_type_name`, `proprietary_name`, `proprietary_name_suffix`, `nonproprietary_name`, `dosage_form_name`, `route_name`, `active_numerator_strength`, `active_ingredient_unit`, `pharm_classes`, `img_url`, `reference_url`) VALUES (54889, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`id`, `product_id`, `product_ndc`, `product_type_name`, `proprietary_name`, `proprietary_name_suffix`, `nonproprietary_name`, `dosage_form_name`, `route_name`, `active_numerator_strength`, `active_ingredient_unit`, `pharm_classes`, `img_url`, `reference_url`) VALUES (131389, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`id`, `product_id`, `product_ndc`, `product_type_name`, `proprietary_name`, `proprietary_name_suffix`, `nonproprietary_name`, `dosage_form_name`, `route_name`, `active_numerator_strength`, `active_ingredient_unit`, `pharm_classes`, `img_url`, `reference_url`) VALUES (123790, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`id`, `product_id`, `product_ndc`, `product_type_name`, `proprietary_name`, `proprietary_name_suffix`, `nonproprietary_name`, `dosage_form_name`, `route_name`, `active_numerator_strength`, `active_ingredient_unit`, `pharm_classes`, `img_url`, `reference_url`) VALUES (120623, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `drug` (`id`, `product_id`, `product_ndc`, `product_type_name`, `proprietary_name`, `proprietary_name_suffix`, `nonproprietary_name`, `dosage_form_name`, `route_name`, `active_numerator_strength`, `active_ingredient_unit`, `pharm_classes`, `img_url`, `reference_url`) VALUES (120437, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `provider`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `provider` (`id`, `user_id`, `organization`, `subunit`) VALUES (1, 1, 'Denver Metro Ambulance', 'Unit 23');
INSERT INTO `provider` (`id`, `user_id`, `organization`, `subunit`) VALUES (2, 3, 'Denver Metro Ambulance', 'Unit 24');
INSERT INTO `provider` (`id`, `user_id`, `organization`, `subunit`) VALUES (3, 4, 'SD Internal Medicine Group', 'GP');

COMMIT;


-- -----------------------------------------------------
-- Data for table `approved_provider`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `approved_provider` (`id`, `patient_id`, `provider_id`, `date_approved`, `active`) VALUES (1, 1, 1, '2019-08-15', 1);
INSERT INTO `approved_provider` (`id`, `patient_id`, `provider_id`, `date_approved`, `active`) VALUES (2, 1, 3, '2018-08-15', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `diagnosis`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `diagnosis` (`id`, `patient_id`, `name`, `date_diagnosed`, `date_resolved`, `icd_10`, `active`) VALUES (1, 1, 'Diabetes Mellutis Type 2 w/o Complication', '2005-07-15', NULL, 'E11.9', 1);
INSERT INTO `diagnosis` (`id`, `patient_id`, `name`, `date_diagnosed`, `date_resolved`, `icd_10`, `active`) VALUES (2, 1, 'Essential Hypertension', '2015-07-15', NULL, 'I10', 1);
INSERT INTO `diagnosis` (`id`, `patient_id`, `name`, `date_diagnosed`, `date_resolved`, `icd_10`, `active`) VALUES (3, 1, 'Major Depressive Disorder', '2018-07-08', NULL, 'F33.0', 1);
INSERT INTO `diagnosis` (`id`, `patient_id`, `name`, `date_diagnosed`, `date_resolved`, `icd_10`, `active`) VALUES (4, 1, 'COPD', '1995-12-24', NULL, 'J44.9', 1);
INSERT INTO `diagnosis` (`id`, `patient_id`, `name`, `date_diagnosed`, `date_resolved`, `icd_10`, `active`) VALUES (5, 1, 'Insomnia', '2014-09-15', NULL, 'G47.00', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `medication`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (1, 1, 'Metformin', 118004, '2019-08-15', NULL, 'q2d', NULL, 2, 1, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (2, 1, 'Humalog Kwikpen', 80, '2019-08-15', NULL, '12U SQ before meals', NULL, 2, 1, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (3, 1, 'Lantus', 1835, '2019-08-15', NULL, '5U SQ qAM', NULL, 2, 2, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (4, 1, 'Losartan', 54889, '2019-08-15', NULL, 'qd', NULL, 2, 2, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (5, 1, 'Sertraline', 131389, '2019-08-15', NULL, 'bid', NULL, 2, 3, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (6, 1, 'Quetiapine', 123790, '2019-08-15', NULL, 'bid', NULL, 2, 3, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (7, 1, 'PROAIR', 120623, '2019-08-15', NULL, '2 puffs PO q4-6h prn cough/SOB', NULL, 2, 4, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (8, 1, 'Montelukast', 120437, '2019-08-15', NULL, 'qhs', NULL, 2, 4, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `personal_note`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `personal_note` (`id`, `patient_id`, `text_content`, `create_date`, `update_date`, `medication_id`) VALUES (1, 1, 'starting to feel a little dizzy and I keep waking up to use the bathroom a lot', '2019-08-15 09:27:52', NULL, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `allergy`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `allergy` (`id`, `patient_id`, `allergen`, `reaction`, `active`) VALUES (1, 1, 'Penicillin', 'severe hives', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `emergency_contact`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `emergency_contact` (`id`, `patient_id`, `relationship`, `first_name`, `last_name`, `phone`, `email`) VALUES (1, 1, 'husband', 'Joe', 'Doe', '303-555-5555', 'joedoe@doe.com');
INSERT INTO `emergency_contact` (`id`, `patient_id`, `relationship`, `first_name`, `last_name`, `phone`, `email`) VALUES (2, 1, 'son', 'Joel', 'Doe', '303-555-5551', 'joeld@doe.com');

COMMIT;

