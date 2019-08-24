
-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`) VALUES (1, 'jsmith1', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', 1, 'ems', '2019-08-14 11:27:52', NULL, 'John', 'C', 'Smith', 'jcsmith@dma.org', '303-555-5155', 'Static Main Rd', 'Denver', 'CO', '80111');
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`) VALUES (2, 'jldoe', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', 1, 'patient', '2019-08-15 09:27:52', NULL, 'Jane', 'Lindsey', 'Doe', 'jldoe@doe.com', '303-555-5155', '8072 Angular Rd', 'Englewood', 'CO', '80110');
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`) VALUES (3, 'admin', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', 1, 'admin', '2019-08-14 05:27:52', NULL, 'QRXAdmin', 'Admin', 'Admin', 'admin@qrx.com', '303-555-5155', '9070 Spring Tool Street', 'Englewood', 'CO', '80110');
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`) VALUES (4, 'ksmith1', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', 1, 'physician', '2019-08-14 05:27:52', 'MD', 'Kevin', 'W', 'Smith', 'kws@group.com', '303-555-5155', '4032 Bit drive', 'Denver', 'CO', '80111');

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
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (7, 1, 'PROAIR', 120623, '2019-08-15', '2019-08-15', '2 puffs PO q4-6h prn cough/SOB', NULL, 2, 4, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (8, 1, 'Montelukast', 120437, '2019-08-15', '2019-08-15', 'qhs', NULL, 2, 4, 1);

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
