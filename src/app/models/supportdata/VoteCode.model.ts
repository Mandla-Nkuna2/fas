import moment from 'moment';
export default class Votecodes {
  VoteCodeGuid: string;
  Votecode: string;
  VotecodeBud: number;
  VotecodeDate: string;
  Comment: string;
  MinBal: number;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  Active: string;
  CaptureName: string;
}
