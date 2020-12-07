import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../shared/appsetting';
import { AppSettingsService } from '../shared/appsettings.service';
import {IBook} from './book';

@Component({
  selector: 'pm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

private _appSettings:AppSettings;
private _url:string;
public Books : IBook[];
public pageTitle :string = "Complete List of Books"

  constructor(private appsettings: AppSettingsService) { 
    //api
    this._appSettings =appsettings.getSettings();
    
  }

  ngOnInit(): void {
    //BookList Endpoint
    this._url = this._appSettings.BookerApIUrl +'book'

    //call service to get list of books
    console.log("getting books");
  }

}
