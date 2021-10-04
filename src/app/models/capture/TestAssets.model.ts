import moment from 'moment';
export class TestAssets {
  id: string;
  name: string;
  surname: string;
  date: string;

  constructor(id, name, surname, date) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.date = date;
  }
}
