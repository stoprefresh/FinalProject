export class User {

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
  image: string;

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
    zip?: string,
    image?: string
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
      (this.zip = zip),
      (this.image = image)
      ;
  }
}
export interface IUserResponse {
  total: number;
  results: User[];
}
