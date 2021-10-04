import moment from 'moment';
export default class ItemColor {
  ColourGuid: string;
  Colour: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
