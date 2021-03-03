import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Purchase } from 'src/app/class/purchase';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  
  constructor( private httpService: HttpService ) { 
      this.purchaseForm = this.createFormGroup();
    }
         
  ngOnInit(): void { }

  purchaseForm: FormGroup;
  quantity: number = history.state.quantity;
  totalPrice: number = history.state.price;

  myPurchase!: Purchase;
  stringJson: any;
  purchaseStatus = 0;
  purchaseCancel = false;

  createFormGroup() {
    return new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Z].*$')]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Z].*$')]),
    nStreet: new FormControl('', [Validators.required, Validators.minLength(1)]),
    street: new FormControl('', [Validators.required, Validators.minLength(1)]),
    city: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('^[A-Z].*$')]),
    zipCode: new FormControl(null, [Validators.minLength(5), Validators.maxLength(6)]),
   });
  }

  cancelPurchase() {
    this.purchaseCancel = true;
  }

  onSubmit() {
    this.stringJson = JSON.stringify(this.purchaseForm.value);
    let conv = JSON.parse(this.stringJson);
    this.myPurchase = new Purchase(
      1, //id
      conv.firstName,
      conv.lastName,
      conv.nStreet,
      conv.street,
      conv.city,
      conv.zipCode,
      this.quantity,
      this.totalPrice);
  
      this.httpService.purchasePost(this.myPurchase).subscribe(data => {
      let res = JSON.parse(JSON.stringify(data));
      this.purchaseStatus = res.status;
      console.log("PURCHASE STATUS: " + res.status);
 });
}

}
