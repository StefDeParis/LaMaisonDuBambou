import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../class/article';
import { Purchase } from '../class/purchase';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  urlAllArticles: string = 'http://localhost:8080/getAllArticles/';
  urlArticle: string = 'http://localhost:8080/getArticle/';
  urlPurchase: string = 'http://localhost:8080/paiement/';

  articles: Array<Article> = new Array<Article>();

  // Injecter le service
  constructor(private http: HttpClient) { 
    }

  getAllArticles() {
    return this.http.get<Array<Article>>(this.urlAllArticles);
  }

  purchasePost(p: Purchase) {
    // console.warn("SVC PURCHASE: "+ this.urlPurchase + ' ' + p.totalPurchase); //DEBUG !!!
    return this.http.post(this.urlPurchase, p);
  }

  //DEBUG !!!
  // getArt(id: number) {
  //   console.log("URL GET_ART: " + this.urlArticle + " ID: " + id); 
  //   return this.http.get(this.urlArticle + id);
  // }

//DEBUG !!!
  // getPurchase(id: number) {
  //   // console.log("URL GET_PURCHASE: " + this.urlPurchase + " ID: " + id); 
  //   return this.http.get(this.urlPurchase + id);
  // }

}
