export class User {
  // "username": "dmaunit2",
  // "password": "test",
  // "active": true,
  // "role": "ems",
  // "createDate": "2019-08-14",
  // "title": null,
  // "firstName": "Cecil",
  // "middleName": "W",
  // "lastName": "Smith",
  // "email": "cwsmith@dma.org",
  // "phone": "303-555-5155",
  // "street": "123 Java Rd",
  // "city": "Denver",
  // "state": "CO",
  // "zip": "80111"

  id: number;
  username: string;
  password: string;
  active: boolean;
  role: string;
  createDate: Date;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;

  constructor(
    id?: number,
    username?: string,
    password?: string,
    active?: boolean,
    role?: string,
    createDate?: Date,
    title?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    phone?: string,
    street?: string,
    city?: string,
    state?: string,
    zip?: string
  ) {
    (this.id = id),
      (this.username = username),
      (this.password = password),
      (this.email = email),
      (this.active = active),
      (this.role = role),
      (this.createDate = createDate),
      (this.title = title),
      (this.firstName = firstName),
      (this.lastName = lastName),
      (this.email = email),
      (this.phone = phone),
      (this.street = street),
      (this.state = state),
      (this.zip = zip)
      ;
  }
}
export interface IUserResponse {
  total: number;
  results: User[];
}
