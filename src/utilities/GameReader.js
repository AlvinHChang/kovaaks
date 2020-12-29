import {
  getProcesses,
} from 'memoryjs';

export default class GameReader {
  constructor() {
    this.test = false;
  }

  checkKovaaksOpen() {
    console.log('All Processes', getProcesses());
    return this.test;
  }
}
