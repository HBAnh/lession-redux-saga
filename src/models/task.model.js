import { v4 as uuidv4 } from "uuid";
export class Task {
  constructor(data) {
    this.title = data.title;
    this.decriptions = data.decriptions;
    this.status = data.status;
    this.onChange = uuidv4();
  }
}
