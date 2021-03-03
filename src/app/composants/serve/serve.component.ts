import { Component, OnInit } from '@angular/core';
import { HttpParams,  HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})

export class ServeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  ROOT_URL = 'http://localhost:8080/';

   //DEBUG ???
   public sendGETRequestWithParameters(){
    let params = new HttpParams();
    params = params.append('_page', "1");
    params = params.append('_limit', "10");

  // return this.httpClient.get("http://server.com/api/products", {params: params});
  return this.httpClient.get("http://localhost:8080/", {params: params});
 }

}
