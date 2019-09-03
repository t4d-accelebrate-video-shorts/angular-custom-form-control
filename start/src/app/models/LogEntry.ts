export enum LogLevel {
  Info = 'Info',
  Warn = 'Warn',
  Error = 'Error',
}

export class LogEntry {

  constructor(
    private msg: string,
    private logLevel: LogLevel = LogLevel.Info,
  ) { }

  public toString() {
    return `${new Date().toISOString()} ${this.logLevel} ${this.msg}`;
  }

  public toObject() {
    return {
      date: new Date().toISOString(),
      logLevel: this.logLevel.toString(),
      msg: this.msg,
    };
  }

  public toJSON() {
    return JSON.stringify(this.toObject());
  }
}
