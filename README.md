## Team Windy Daydreamer
* Craig Dreiling - Scrum Master
* Emily Lau - Team Sweeper
* Miguel Marsiglia - Repo Owner
* Cecil Kitch - DBA

### Summary / Overview
QRx - Patient/Provider Interface. A collaborative proof of concept for streamlining emergency responder access to patient information. As well as to provide a service as a single, dependable source for patient healthcare providers to access their patients' medication lists.

### REST API Endpoints
| Action |HTTP Verb| Resource URI                           |     Action            |
| -------|---------|----------------------------------------| ----------------------|
| LIST   | GET     | /api/users/                            | List Users            |
| CREATE | POST    | /api/users/                            | Add User              |
| READ   | GET     | /api/users/{uid}/                      | Show User             |
| UPDATE | PUT     | /api/users/{uid}/                      | Update User           |
| DELETE | DELETE  | /api/users/{uid}/                      | Delete User           |
|--------|---------|----------------------------------------|-----------------------| 
| LIST   | GET     | /api/providers/                        | List Providers        |
| CREATE | POST    | /api/providers/                        | Add Provider          |
| READ   | GET     | /api/providers/{pid}/                  | Show Provider         |
| UPDATE | PUT     | /api/providers/{pid}/                  | Update Provider       |
| DELETE | DELETE  | /api/providers/{pid}/                  | Delete Provider       |
|--------|---------|----------------------------------------|-----------------------|
| LIST   | GET     | /api/drugs/                            | List Drugs            |
| CREATE | POST    | /api/drugs/                            | Add Drug              |
| READ   | GET     | /api/drugs/{did}/                      | Show Drug             |
| UPDATE | PUT     | /api/drugs/{did}/                      | Update Drug           |
| DELETE | DELETE  | /api/drugs/{did}/                      | Delete Drug           |
|--------|---------|----------------------------------------|-----------------------|
| LIST   | GET     | /api/patients/                         | List Patients         |
| CREATE | POST    | /api/patients/                         | Add Patient           |
| READ   | GET     | /api/patients/{pid}/                   | Show Patient          |
| UPDATE | PUT     | /api/patients/{pid}/                   | Update Patient        |
| DELETE | DELETE  | /api/patients/{pid}/                   | Delete Patient        |
|--------|---------|----------------------------------------|-----------------------|
| LIST   | GET     | /api/patients/{pid}/medications/       | List Medications      |
| CREATE | POST    | /api/patients/{pid}/medications/       | Add Medication        |
| READ   | GET     | /api/patients/{pid}/medications/{mid}/ | Show Medication       |
| UPDATE | PUT     | /api/patients/{pid}/medications/{mid}/ | Update Medication     |
| DELETE | DELETE  | /api/patients/{pid}/medications/{mid}/ | Delete Medication     |
|--------|---------|----------------------------------------|-----------------------|
| LIST   | GET     | /api/patients/{pid}/notes              | List Notes            |
| CREATE | POST    | /api/patients/{pid}/notes              | Add Note              |
| READ   | GET     | /api/patients/{pid}/note/{nid}         | Show Note             |
| UPDATE | PUT     | /api/patients/{pid}/noted/{nid}        | Update Note           |
| DELETE | DELETE  | /api/patients/{pid}/note/{nid}         | Delete Note           |
|--------|---------|----------------------------------------|-----------------------|
| LIST   | GET     | /api/patients/{pid}/allergies/         | List Allergies        |
| CREATE | POST    | /api/patients/{pid}/allergies/         | Add  Allergy          |
| READ   | GET     | /api/patients/{pid}/allergies/{aid}/   | Show Allergies        |
| UPDATE | PUT     | /api/patients/{pid}/allergies/{aid}/   | Update Allergy        |
| DELETE | DELETE  | /api/patients/{pid}/allergies/{aid}/   | Delete Allergy        |
|--------|---------|----------------------------------------|-----------------------|
| LIST   | GET     | /api/patients/{pid}/diagnosis/         | List Diagnosis        |
| CREATE | POST    | /api/patients/{pid}/diagnosis/         | Add  Diagnosis        |
| READ   | GET     | /api/patients/{pid}/diagnosis/{did}/   | Show Diagnosis        |
| UPDATE | PUT     | /api/patients/{pid}/diagnosis/{did}/   | Update Diagnosis      |
| DELETE | DELETE  | /api/patients/{pid}/diagnosis/{did}/   | Delete Diagnosis      |
|--------|---------|----------------------------------------|-----------------------|

### Technologies Used
* mySQL
* Java Persistance API
* Spring Boot, Spring Data, Spring Rest, Spring Security
* Angular/TS
* Angular Material Component Library
* Bootstrap Component Library
* HTML5/CSS3/JS

### Demo Application
placeholder 

### Entity Diagram
![qrxdbERD](qrxdbERD.png)
