import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Vendor } from '../../models/Vendor';
import { VendorService } from '../../services/vendor.service'; 
import swal from 'sweetalert2';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  id: string;
  vendor: Vendor = {
    vendorName:'',
    phone: ' ',
    balance: 0,
    chequeAmount: 0
  };
  recordUpdated:boolean = false;

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((params:Params) => {
      console.log(params);
          
    });
    
    

   }

  ngOnInit() {
     // Get id from url
    // console.log(this.id);
    // this.id = this.route.snapshot.params['id'];
     // Get client
     this.id = this.route.snapshot.params['id'];
     this.vendorService.getVendor(this.id).subscribe(vendor => {
      this.vendor = vendor;
     // console.log(this.vendor);
    });
    
  }

  fireFocusEvent(e){
    
  }
  onUpdate({value, valid}: {value: Vendor,valid:boolean}){
    
    if(!valid){
      this.router.navigate(['vendor/'+this.id]);
    } else {
    this.vendorService.updateVendor(this.id, value);
    swal({
      type: 'success',
      title: 'Vendor Updated'
    });
      this.router.navigate(['/']);
  
  }
}

  onDeleteClick(){
    if(confirm("Are you sure to delete?")){
      this.vendorService.deleteVendor(this.id);
      this.router.navigate(['/']);
    }
  }
  

}
