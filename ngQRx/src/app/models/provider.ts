import { User } from './user';
import { Patient } from './patient';

export class Provider {
  id: number;
  user: User;
  organization: string;
  subunit: string;
  patientsApproved: Patient[];

  constructor(
    id?: number,
    user?: User,
    organization?: string,
    subunit?: string,
    patientsApproved?: Patient[]
  ) {
    this.id = id;
    this.user = user;
    this.organization = organization;
    this.subunit = subunit;
    this.patientsApproved = patientsApproved;
  }
}
