import moment from 'moment';
export default class ItemComponent {
  ItemCompGuid: string;
  ItemGuid: string;
  CompNameGuid: string;
  CompMakeGuid: string;
  CompModelGuid: string;
  ServIntvalGuid: string;
  OilWetted: boolean = false;
  OilCap: number;
  OilTypeGuid: string;
  SerialNo: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  ServParts1: string;
  ServParts2: string;
  ServParts3: string;
  ServParts4: string;
  ServParts5: string;
  ServParts6: string;
  ServParts7: string;
  ServParts8: string;
  ServParts9: string;
  ServParts10: string;
  ItemMakeModelGuid: string;
  Capturename: string;
  warranty: number;
  expDate: string;
}
