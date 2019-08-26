import { Patient } from './patient';
export class Allergy {
  // Fields
  id: number;
  patient: Patient;
  allergen: String;
  reaction: String;
  severity: number;
  active: Boolean;

// Constructor
constructor(id?: number,
  patient?: Patient,
  allergen?: String,
  reaction?: String,
  severity?: number,
  active?: Boolean
) {
  this.id = id;
  this.patient = patient;
  this.allergen = allergen;
  this.reaction = reaction;
  this.severity = severity;
  this.active = active;
  }
}
