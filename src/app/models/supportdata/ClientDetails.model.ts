export default class ClientDetails {
  ClientGuid: string;
  ClientName: string;
  ClientAddress_Ln0: number;
  ClientAddress_Ln1: string;
  ClientAddress_Ln2: string;
  ClientAddress_Ln3: string;
  ClientAddress_code: number;
  ClientTel: string;
  ClientFax: string;
  Active: string;
  CaptureDate: string = new Date().toString();
}
