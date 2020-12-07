import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { AppSettings } from './appsetting'; 

@Injectable({
  providedIn: 'root'
})

//https://stackoverflow.com/questions/36568388/observable-of-is-not-a-function
export class AppSettingsService {

  constructor() { }
  getSettingsObservable() : Observable<AppSettings> {
    let settings = new AppSettings();
    //changed from Observable.of to of
    return of<AppSettings>(settings);
  }

  getSettings() : AppSettings {
    let settings = new AppSettings();
    return settings;
  }
  
}
