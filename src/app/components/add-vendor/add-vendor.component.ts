import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/Vendor';
import { Router } from '@angular/router';
import { VendorService } from '../../services/vendor.service'; 
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  vendor: Vendor = {
    vendorName:'',
    phone: '',
    balance:0,
    chequeAmount:0
  }

  disableBalanceOnAdd: boolean = true;
  errorsOnSubmit: boolean = false;
  

  constructor(
    private router: Router,
    private vendorService: VendorService,
 
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Vendor, valid: boolean}){
    if(this.disableBalanceOnAdd){
      value.balance = 0;
      value.chequeAmount = 0;
    }
    if(!valid){
      
     this.errorsOnSubmit = true;
      this.router.navigate(['add-vendor']);
    } else {
      //Add New Vendor
      this.vendorService.newVendor(value);
      swal({
        type: 'success',
        title: 'Vendor Added'
      });
      this.router.navigate(['/']);
         
          
    }
  }

  fireFocusEvent(e){
    this.errorsOnSubmit = false;
  }

}
