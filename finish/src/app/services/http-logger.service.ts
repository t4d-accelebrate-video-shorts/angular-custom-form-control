import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LogLevel, LogEntry } from '../models/LogEntry';

@Injectable({
  providedIn: 'root',
})
export class HttpLogger {

  constructor(private httpClient: HttpClient) { }

  private log(logEntry: LogEntry) {
    console.log(logEntry.toObject() );
    this.httpClient.post('http://localhost:4250/log', logEntry.toObject()).subscribe();
  }

  info(msg: string) {
    this.log(new LogEntry(msg));
  }

  warn(msg: string) {
    this.log(new LogEntry(msg, LogLevel.Warn));
  }

  error(msg: string) {
    this.log(new LogEntry(msg, LogLevel.Error));
  }

}
