
-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`, `image`) VALUES (1, 'dmaunit23', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', 1, 'EMS', '2019-08-14 11:27:52', NULL, 'John', 'C', 'Angular', 'jcsmith@dma.org', '303-555-5155', '404 Static Main Rd', 'Denver', 'CO', '80111', '/assets/img/john.jpg');
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`, `image`) VALUES (2, 'jldoe', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', 1, 'User', '2019-08-15 09:27:52', NULL, 'Jane', 'L', 'Doe', 'jaldoe@doe.com', '303-555-5155', '404 Angular Rd', 'Englewood', 'CO', '80110', '/assets/img/jane.jpg');
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`, `image`) VALUES (3, 'admin', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', 1, 'Admin', '2019-08-14 05:27:52', NULL, 'QRXAdmin', 'Admin', 'Admin', 'admin@qrx.com', '303-555-5155', '2048 Spring Tool Street', 'Englewood', 'CO', '80110', '/assets/img/admin.jpg');
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `create_date`, `title`, `first_name`, `middle_name`, `last_name`, `email`, `phone`, `street`, `city`, `state`, `zip`, `image`) VALUES (4, 'ksmith1', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', 1, 'Physician', '2019-08-14 05:27:52', 'MD', 'Kevin', 'W', 'Smith', 'kws@sdinternalmed.com', '303-555-5155', '256 Bit Dr', 'Denver', 'CO', '80111', '/assets/img/kevin.jpg');

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
INSERT INTO `patient` (`id`, `user_id`, `qrcode_url`, `has_dnr`, `birth_date`, `anatomical_sex`, `height_inches`, `weight_lbs`, `blood_type_id`) VALUES (1, 2, '/api/qrx/username/jldoe', 0, '1960-07-15', 'Female', 63.7, 170.6, 4);

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
INSERT INTO `approved_provider` (`id`, `patient_id`, `provider_id`, `date_approved`, `active`, `name`) VALUES (1, 1, 3, '2018-08-15', 1, 'Kevin Smith MD');
INSERT INTO `approved_provider` (`id`, `patient_id`, `provider_id`, `date_approved`, `active`, `name`) VALUES (2, 1, NULL, '2018-08-15', 1, 'Tracy Tran MD');
INSERT INTO `approved_provider` (`id`, `patient_id`, `provider_id`, `date_approved`, `active`, `name`) VALUES (3, 1, NULL, '2018-08-15', 0, 'Cynthia Wheat DO');
INSERT INTO `approved_provider` (`id`, `patient_id`, `provider_id`, `date_approved`, `active`, `name`) VALUES (4, 1, NULL, '2018-08-15', 1, 'Jacquelyn Banasik DO');

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
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (1, 1, 'Metformin', 118004, '2018-06-15', NULL, 'One tablet twice daily', NULL, 1, 1, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (2, 1, 'Humalog Kwikpen', 80, '2018-06-15', NULL, '12U SQ before meals', NULL, 1, 1, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (3, 1, 'Lantus', 1835, '2018-06-15', NULL, '5U SQ daily in the am', NULL, 1, 1, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (4, 1, 'Losartan', 54889, '2010-07-15', NULL, '', NULL, 2, 2, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (5, 1, 'Sertraline', 131389, '2017-04-15', '2019-04-15', 'One tablet daily in the am', NULL, 3, 3, 0);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (6, 1, 'Quetiapine', 123790, '2017-04-15', '2019-04-15', 'One tablet daily in the am', NULL, 3, 3, 0);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (7, 1, 'ProAir', 120623, '2008-08-15', NULL, '2 puffs every 4 to 6 hours for cough', NULL, 4, 4, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (8, 1, 'Montelukast', 120437, '2008-08-15', NULL, 'Every night at bed time', NULL, 4, 4, 1);
INSERT INTO `medication` (`id`, `patient_id`, `medication_name`, `drug_id`, `start_date`, `stop_date`, `directions`, `reason_discontinued`, `approved_provider_id`, `diagnosis_id`, `active`) VALUES (9, 1, 'Furosemide', NULL, '2008-07-25', NULL, 'Once daily in the am', NULL, 4, 4, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `personal_note`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `personal_note` (`id`, `patient_id`, `text_content`, `create_date`, `update_date`, `medication_id`) VALUES (1, 1, 'starting to feel a little dizzy and I keep waking up to use the bathroom a lot', '2019-08-15 09:27:52', '2019-08-15 09:27:52', 9);
INSERT INTO `personal_note` (`id`, `patient_id`, `text_content`, `create_date`, `update_date`, `medication_id`) VALUES (2, 1, 'woke up to use the bathroom', '2019-07-25 22:55:52', '2019-07-25 22:55:52', 9);

COMMIT;


-- -----------------------------------------------------
-- Data for table `allergy`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `allergy` (`id`, `patient_id`, `allergen`, `reaction`, `severity`, `active`) VALUES (1, 1, 'Penicillin', 'anaphylaxis', 5,1);
INSERT INTO `allergy` (`id`, `patient_id`, `allergen`, `reaction`, `severity`, `active`) VALUES (2, 1, 'Dust Mites','cough from postnasal drip', 3, 4);
INSERT INTO `allergy` (`id`, `patient_id`, `allergen`, `reaction`, `severity`, `active`) VALUES (3, 1, 'Cat Dander','nasal congestion', 2, 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `emergency_contact`
-- -----------------------------------------------------
START TRANSACTION;
USE `qrxdb`;
INSERT INTO `emergency_contact` (`id`, `patient_id`, `relationship`, `first_name`, `last_name`, `phone`, `email`) VALUES (1, 1, 'Husband', 'Joel', 'Doe', '303-555-5551', 'jdoe@doe.com');
INSERT INTO `emergency_contact` (`id`, `patient_id`, `relationship`, `first_name`, `last_name`, `phone`, `email`) VALUES (2, 1, 'Son', 'Joe', 'Doe', '303-555-5555', 'jjrdoe@doe.com');
INSERT INTO `emergency_contact` (`id`, `patient_id`, `relationship`, `first_name`, `last_name`, `phone`, `email`) VALUES (3, 1, 'Daughter', 'Karen', 'Doe', '303-555-5555', 'kdoe@doe.com');

COMMIT;
