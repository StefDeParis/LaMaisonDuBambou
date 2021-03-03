export class Article {
    constructor(private _ref: number,
         private _imgUrl : string,
         private _title : string,
         private _description : string,
         private _category : string,
         private _quantity : number,
         private _price : number) { }
    
    get ref() {
        return this._ref;
    }
    set ref(_ref: number) {
        this._ref = _ref;
    }

    get imgUrl() {
        return this._imgUrl;
    }
    set imgUrl(_imgUrl: string) {
        this._imgUrl = _imgUrl;
    }

    get title() {
        return this._title;
    }
    set title(_title: string) {
        this._title = _title;
    }

    get description() {
        return this._description;
    }
    set description(_description: string) {
        this._description = _description;
    }

    get category() {
        return this._category;
    }
    set category(_category: string) {
        this._category = _category;
    }

    get quantity() {
        return this._quantity;
    }
    set quantity(_quantity: number) {
        this._quantity = _quantity;
    }

    get price() {
        return this._price;
    }

    set price(_price: number) {
        this._price = _price;
    }
}
