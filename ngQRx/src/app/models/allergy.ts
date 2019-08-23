import { Patient } from './patient';
export class Allergy {
  // Fields
  id: number;
  patient: Patient;
  allergen: String;
  reaction: String;
  active: Boolean;

// Constructor
constructor(id?: number,
  patient?: Patient,
  allergen?: String,
  reaction?: String,
  active?: Boolean
) {
  this.id = id;
  this.patient = patient;
  this.allergen = allergen;
  this.reaction = reaction;
  this.active = active;
  }
}
