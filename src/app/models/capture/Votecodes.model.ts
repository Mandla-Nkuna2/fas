import moment from 'moment';
export default class Votecodes {
  VoteCodeGuid: string;
  Votecode: string;
  VotecodeBud: string;
  VotecodeDate: string;
  Comment: string;
  MinBal: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  Active: string;
  CaptureName: string;
}
