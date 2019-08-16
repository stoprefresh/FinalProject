## Team Windy Daydreamer
Craig Dreiling - Scrum Master
Emily Lau - Team Sweeper
Miguel Marsiglia - Repo Owner
Cecil Kitch - DBA

### Summary / Overview
QRx - Patient/Provider Interface. A collaborative proof of concept for streamlining the emergency responder access to patient interaction as well as to provide a single, dependable source for patient healthcare providers to access their patients' medication lists.

### REST API Endpoints
| Action |HTTP Verb| Resource URI                           |     Action            |
| -------|---------|----------------------------------------| ----------------------|
| LIST   | GET     | /api/patients/{pid}/medications/       | Medication by PID     |
| READ   | GET     | /api/patients/{pid}/                   | Show Patient by ID    |
| CREATE | POST    | /api/patients/{pid}/medications/       | Add Medication by PID |
| UPDATE | PUT     | /api/patients/{pid}/medications/{mid}/  | Update a Medication   |
| DELETE | DELETE  | /api/patients/{pid}/medications/{mid}/ | Delete a Medication   |

### Technologies Used
* mySQL / mySQL Workbench
* Spring Rest API
* Spring Data JPA
* Spring Boot
* Spring Security
* Angular, Angular Material, Bootstrap
* HTML/CSS/JS


### Deployed Application
placeholder 

### Entity Diagram
![Qrx](qrxdb.png)
