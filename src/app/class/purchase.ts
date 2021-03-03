export class Purchase {
    constructor(private _id: number,
        private _lastName : string,
        private _firstName : string,
        private _nStreet : string,
        private _street : string,
        private _city : string,
        private _zipCode : number,
        private _nbArticles : number,
        private _totalPurchase : number) { }
   
   get id() {
       return this._id;
   }
   set id(_id: number) {
       this._id = _id;
   }

   get lastName() {
    return this._lastName;
}
set lastName(_lastName: string) {
    this._lastName = _lastName;
}

get firstName() {
    return this._firstName;
}
set firstName(_firstName: string) {
    this._firstName = _firstName;
}

get nStreet() {
    return this._nStreet;
}
set nStreet(_nStreet: string) {
    this._nStreet = _nStreet;
}

get street() {
    return this._street;
}
set street(_street: string) {
    this._street = _street;
}

get city() {
    return this._city;
}
set city(_city: string) {
    this._city = _city;
}

get zipCode() {
    return this._zipCode;
}
set zipCode(_zipCode: number) {
    this._zipCode = _zipCode;
}

get nbArticles() {
    return this._nbArticles;
}
set nbArticles(_nbArticles: number) {
    this._nbArticles = _nbArticles;
}

get totalPurchase() {
       return this._totalPurchase;
   }
   set totalPurchase(_totalPurchase: number) {
       this._totalPurchase = _totalPurchase;
   }

}
