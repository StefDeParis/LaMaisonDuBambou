
Site commerçant: La maison du bambou
Ce site propose des articles partiellement ou entièrement en bambou.
Ils contribuent ainsi à l'élimination naturelle des déchets.

1. PARTIE FRONT-END
    Le langage de développement utilisé est Angular.
    Il est reponsive.

La page principale est décomposée en 3 parties:
1.1 La barre de navigation
    3 boutons de menu:
        Home, About & Contact
    1 liste de filtre par catégorie:
        - hygiène, 
        - alimentaire,
        - technologie
    1 champ de filtre de saisie avec 1 bouton d'effacement de la zone de saisie.

1.2 Les articles du paniers
    1 ligne par produit ajouté comprenant:
        - la mini photo,
        - le libellé du produit,
        - le prix unitaire,
        - la quantité,
        - le sous total,
        - 1 bouton de suppression de cette ligne du panier.
    En bas du panier:
        - Le total du panier,
        - 1 bouton pour passer commande

    1 bouton pour masquer/montrer les articles du panier Invisible lorsque le panier est vide.
    
1.3 Chaque article proposé est décomposé en 3 colonnes:
    colonne 1
        - 1 affichette du produit.
    colonne 2
        - le libellé du produit et le descriptif technique du produit,
        - 2 boutons pour l'incrément et le décrément de la quantité avec son affichage (de 1 à 50).
    colonne 3
        - 1 bouton d'achat et 1 bouton d'ajout au panier.
    Le nombre d'articles trouvés.

1.4 Un clic sur le bouton "Acheter" ou "Passer la commande" redirige l'acheteur vers un formulaire de saisie des informations inhérentes à son achat reprenant le nombre d'article achetés et le prix total à payer.


2. PARTIE BACK-END
    Le langage de développement utilisé est Express.js dans Node.js

2.1 Le traitement des requêtes ...GET, POST...

2.2 La base de données utilisée est MySQL.
    Le nom donné à la base est: POE_LMDB
    La table "article" contient les champs suivants:
        - la référence de l'article, 
        - l'url de l'image du produit, 
        - le libellé du produit, 
        - la description du produit, 
        - la catégorie (hygiène, alimentaire et technologie), 
        - la quantité (pour la sélection du client),
        - le prix unitaire.

    La table "client" contient les champs suivants:
        - le nom du client,
        - le numéro de la carte,
        - la date d'espiration,
        - le code CCV.

    La table "achat" contient les champs suivants:
        - le nombre d'articles achetés,
        - le prix total de l'achat,
        - la date d'achat.

3. Le fonctionnement
    Le client filtre sa recherche en tapant le début du nom du produit recherché et peut en plus ajouter une catégorie de recherche.
    Il ajoute ses articles avec les quantités au panier ou fait l'achat d'un seul article avec sa quantité puis effectue son règlement.
---------------------------------------------------------------------------

# LaMaisonDuBambou

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
