import { v4 } from "uuid";

export class User {
  public readonly id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public followers!: Array<User>;
  public following!: Array<User>;

  constructor(props: Pick<User, "name" | "email" | "password">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      console.log(v4());
      this.id = v4();
    }
  }
}
