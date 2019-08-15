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
  `id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `active` TINYINT NULL,
  `role` VARCHAR(20) NULL,
  `create_date` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `patient`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `patient` ;

CREATE TABLE IF NOT EXISTS `patient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `qrcode` VARCHAR(45) NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `dob` VARCHAR(45) NULL,
  `biological_sex` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_patient_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_patient_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `drug`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `drug` ;

CREATE TABLE IF NOT EXISTS `drug` (
  `id` INT NOT NULL,
  `PRODUCTID` VARCHAR(45) NULL,
  `PRODUCTNDC` VARCHAR(45) NULL,
  `PRODUCTTYPENAME` VARCHAR(45) NULL,
  `PROPRIETARYNAME` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `note`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `note` ;

CREATE TABLE IF NOT EXISTS `note` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `patient_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_note_patient1_idx` (`patient_id` ASC),
  CONSTRAINT `fk_note_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `provider`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `provider` ;

CREATE TABLE IF NOT EXISTS `provider` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `organization` VARCHAR(250) NULL,
  `phone` VARCHAR(450) NULL,
  `email` VARCHAR(450) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_provider_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_provider_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `allergy`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `allergy` ;

CREATE TABLE IF NOT EXISTS `allergy` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `reaction` VARCHAR(45) NULL,
  `patient_id` INT NOT NULL,
  `severity` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_allergy_patient1_idx` (`patient_id` ASC),
  CONSTRAINT `fk_allergy_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `EmergencyContact`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `EmergencyContact` ;

CREATE TABLE IF NOT EXISTS `EmergencyContact` (
  `id` INT NOT NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `relationship` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
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
-- Table `patient_has_drug`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `patient_has_drug` ;

CREATE TABLE IF NOT EXISTS `patient_has_drug` (
  `id` INT NOT NULL,
  `drug_id` INT NOT NULL,
  `patient_id1` INT NOT NULL,
  `start_date` DATETIME NULL,
  `stop_date` DATETIME NULL,
  `route` VARCHAR(250) NULL,
  `frequency` VARCHAR(45) NULL,
  `reason_discontinued` VARCHAR(45) NULL,
  INDEX `fk_patient_has_drug_drug1_idx` (`drug_id` ASC),
  INDEX `fk_patient_has_drug_patient1_idx` (`patient_id1` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_patient_has_drug_drug1`
    FOREIGN KEY (`drug_id`)
    REFERENCES `drug` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_patient_has_drug_patient1`
    FOREIGN KEY (`patient_id1`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `patient_has_provider`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `patient_has_provider` ;

CREATE TABLE IF NOT EXISTS `patient_has_provider` (
  `patient_id1` INT NOT NULL,
  `provider_id1` INT NOT NULL,
  INDEX `fk_patient_has_provider_patient2_idx` (`patient_id1` ASC),
  INDEX `fk_patient_has_provider_provider2_idx` (`provider_id1` ASC),
  CONSTRAINT `fk_patient_has_provider_patient2`
    FOREIGN KEY (`patient_id1`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_patient_has_provider_provider2`
    FOREIGN KEY (`provider_id1`)
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
  `icd-10` VARCHAR(45) NULL,
  `date_dxd` VARCHAR(45) NULL,
  `date_resolved` VARCHAR(45) NULL,
  `patient_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_diagnosis_patient1_idx` (`patient_id` ASC),
  CONSTRAINT `fk_diagnosis_patient1`
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
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`) VALUES (1, 'provider', 'test', 1, 'provider', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`) VALUES (2, 'patient', 'test', 1, 'patient', NULL);

COMMIT;

