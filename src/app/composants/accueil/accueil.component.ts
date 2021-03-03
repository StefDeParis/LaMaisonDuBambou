import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/class/article';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {
  constructor(private httpService: HttpService,
    private router: Router) { }

  // article!: Article;

  stringJson: any;

  ngOnInit(): void {
  //DEBUG !!!
    // this.httpService.getArt(101).subscribe(data => {
    //   this.stringJson = JSON.stringify(data);
    //   let res = JSON.parse(this.stringJson);
    //   res.result.forEach((item: Article) => { 
    //     this.article = item;
    //     this.articles.push(this.article);
    //   });
    // });
    
    //DEBUG !!!
    // this.httpService.getPurchase(4).subscribe(data => {
    //   this.stringJson = JSON.stringify(data);
    // console.log("PUR. 3: " + JSON.stringify(this.stringJson));
      // let res = JSON.parse(this.stringJson);
      // console.log("PURCHASE 3 STATUS: " + res.status);
      // res.result.forEach((item: Purchase) => { 
      //   this.purchase = item;
      // });
    // });
    
    this.loadArticles();

    this.fctFilterArticles();
  }

  // declaration & initilization
  articles: Array<Article> = [];
  filterArticles: Array<Article> = [];
  myChart: Array<Article> = []; //all articles added to the chart
  categorieValue = "Tous";
  searchValue = '';
  bChart: boolean = false;
  bHideShowBtChart: boolean = false;

  // Navigation bar
  categories = [
    {id: 1, name: "Tous"},
    {id: 2, name: "Hygiene"},
    {id: 3, name: "Alimentaire"},
    {id: 4, name: "Technologie"}
  ];

  loadArticles() {
    this.httpService.getAllArticles().subscribe(data => {
      this.stringJson = JSON.stringify(data);
      let res = JSON.parse(this.stringJson);
      res.result.forEach((item: Article) => { 
        this.articles.push(item);
      });
    });
  }

  handleFilter(value: string) {
    this.searchValue = value.toLowerCase();
    this.fctFilterArticles(); //remake filtered list
  }

  handleCategory(value: string) {
    this.categorieValue = value;
    this.fctFilterArticles(); //remake filtered list
  }

  handleBtClear() {
    this.searchValue = '';
    this.fctFilterArticles(); //remake filtered list
  }

  fctFilterArticles() { //filtered according to category & text filter too
    this.filterArticles = [];
    for (let article of this.articles) {
      //console.log("CAT: " + article.category.toLowerCase() + " TITLE: " + article.title.toLowerCase() + " SEARCH:" + this.searchValue); //DEBUG !!!
      if (article.title.toLowerCase().includes(this.searchValue.toLowerCase()) &&
        (article.category.toLowerCase().includes(this.categorieValue.toLowerCase()) ||
        this.categorieValue.toLowerCase().includes("tous") || this.categorieValue === "")) {
            this.filterArticles.push(article);
      }
    }
    return this.filterArticles.length;
  }
  
  getMult(nb1: any, nb2: any) {
    return nb1 * nb2;
  }
  
  // Articles
  handleDecQuantity(i: number) {
    if (this.filterArticles[i].quantity > 1)
      this.filterArticles[i].quantity -=1;
  }

  handleIncQuantity(i: number) {
    if (this.filterArticles[i].quantity < 50)
      this.filterArticles[i].quantity +=1;
 }

  handleDecChartQuantity(i: number) {
    if (this.myChart[i].quantity > 1)
      this.myChart[i].quantity -=1;
  }
  handleIncChartQuantity(i: number) {
    if (this.myChart[i].quantity < 50)
      this.myChart[i].quantity +=1;
  }

//http://localhost:8080/getAllArticles
//http://localhost:8080/getArticle
// console.log(this.serve.sendGETRequestWithParameters);// .sendGETRequestWithParameters(); //DEBUG !!!
// this.serve.sendGETRequestWithParametersXXX();

// Chart 
  handleAddToChart(i: number) {
    let chartItem = new Article(this.filterArticles[i].ref,
      this.filterArticles[i].imgUrl,
      this.filterArticles[i].title,
      this.filterArticles[i].description,
      this.filterArticles[i].category,
      this.filterArticles[i].quantity,
      this.filterArticles[i].price );
    this.myChart.push(chartItem); 
  }

  handlePay(quantity: number, price: number) {
    this.router.navigateByUrl('/paiement', { state: { quantity: quantity, price: price } });
  }

  handleDeleteArticleChart(i: number) {
    this.myChart.splice(i,1);
      if (this.myChart.length == 0)
      this.bChart = false;
      this.bHideShowBtChart = false;
  }
     
  handleTotalChartPrice() {
    var totalChartPrice: number = 0;
    this.myChart.forEach((item)=>{
      totalChartPrice += item.price * item.quantity
    });
    return totalChartPrice;
  }
       
  handleTotalChartArticles() {
    var totalChartArticles: number = 0;
    this.myChart.forEach((item)=>{
      totalChartArticles += item.quantity
    });
    return totalChartArticles;
  }
       
///////////////////////////////////////////////////////////            
//to get from DB !!!
  // articles: Array<Article> = [
  //   new Article(101,
  //     '../assets/images/hygiene/pack5BrossesADents.jpg',
  //     'Pack de 5 brosses à dents - Pastel',
  //     '✅ Brosse à dents écologiques en bambou naturel : permet de limiter sa consommation de plastiques jetables.\n✅ 100% biodégradable: fabriqué à partir d’éléments naturels, nos brosses à dents sont aussi sans bisphénol A (BPA) une substance chimique utilisée',
  //     'Hygiene',
  //     1,
  //     23.20),

  //   new Article(102,
  //     '../assets/images/hygiene/paille-bambou.jpg',
  //     'PAILLE BAMBOU NATUREL lot de 12',
  //     'Fini le gaspi! Sirotez vos boissons chaudes ou froides avec ces PAILLES BAMBOU réutilisables',
  //     'Alimentaire',
  //     1,
  //     9.90),

  //     new Article(103,
  //       '../assets/images/hygiene/couverts_bambou.jpeg',
  //       'Kit pique nique en bambou',
  //       'Naturel et élégant, le kit pique nique Nature et Zen est vous fera faire un premier pas vers le zéro déchets, pour aider à protéger la planète',
  //       'Alimentaire',
  //       1,
  //       12.90),

  //       new Article(104,
  //         '../assets/images/technology/copque_iPhone11_bambou.jpg',
  //         'Perso-Coque iPhone 11 Bois-Bambou',
  //         'Coque haut de gamme en bois véritable! (bamboo)',
  //         'Technologie',
  //         1,
  //         29.99),

  //         new Article(105,
  //           '../assets/images/technology/clavier_souris_bambou.webp',
  //           'Combo souris ordinateur clavier Handcrafted naturel en bois Plug and Play jaune',
  //           '2.4G sans fil',
  //           'Technologie',
  //           1,
  //           36.73),
            
  //           new Article(106,
  //             '../assets/images/technology/maison_oiseau_bambou.png',
  //             'Maison pour oiseau en bambou',
  //             'Inviter les oiseaux dans votre univers magique',
  //             'Technologie',
  //             1,
  //             32.19),
            
  //             new Article(107,
  //               '../assets/images/technology/support_telephone_bambou.jpg',
  //               'Support téléphone en bambou',
  //               'Fais amplification des hauts parleurs',
  //               'Technologie',
  //               1,
  //               13.50),
      
  //               new Article(108,
  //                 '../assets/images/technology/velo_bambou.jpg',
  //                 'La petite révolution des vélos en bambou',
  //                 'Depuis quelques années, les cadres en bambou se font une place sur le marché du vélo. Beaux, naturels et confortables.',
  //                 'Technologie',
  //                 1,
  //                 1300.20),
        
  //     ]
}
