#!/bin/sh

mysql -u root -p < qrxdb.sql
mysqlimport --ignore-lines=1 --fields-terminated-by=, --fields-optionally-enclosed-by='"' --columns='id,product_id, product_ndc,product_type_name,proprietary_name,proprietary_name_suffix,nonproprietary_name,dosage_form_name,route_name,active_numerator_strength,active_ingredient_unit,pharm_classes, img_url, reference_url' --local -u root -p qrxdb drug.csv
