import { Medication } from './medication';
export class Note {
  id: number;
  textContent: string;
  createDate: Date;
  updateDate: Date;
  medication: Medication;
  constructor(
    id?: number,
  textContent?: string,
  createDate?: Date,
  updateDate?: Date,
  medication?: Medication,
  ) {
    this.id = id;
    this.textContent = textContent;
    this.createDate = createDate;
    this.updateDate = updateDate;
    this.medication = medication;
  }
}
