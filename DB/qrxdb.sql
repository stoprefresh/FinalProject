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
  `password` VARCHAR(4500) NOT NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  `role` VARCHAR(20) NULL DEFAULT 'User',
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
  `image` VARCHAR(5000) NULL,
  `update_date` DATETIME NULL,
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
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL,
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
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL,
  `special` VARCHAR(450) NULL,
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
  `provider_id` INT NULL,
  `date_approved` DATE NULL,
  `name` VARCHAR(1000) NULL,
  `active` TINYINT NULL DEFAULT 1,
  `special` VARCHAR(450) NULL,
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
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL,
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
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL,
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
  `severity` INT NULL,
  `active` TINYINT NULL,
  `update_date` DATETIME NULL,
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `drug_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_allergy_patient1_idx` (`patient_id` ASC),
  INDEX `fk_allergy_drug1_idx` (`drug_id` ASC),
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
  `create_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL,
  `active` TINYINT NULL,
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
