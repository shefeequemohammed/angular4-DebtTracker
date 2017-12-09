import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/Vendor';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  vendors: any[];
  totalOwed: number;
  id: string;

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.vendorService.getClients().subscribe(vendors => {
      console.log(vendors);
      this.vendors = vendors;
      this.getTotalOwed();
    });
  }

  getTotalOwed(){
    let total = 0;
    for(let i = 0; i < this.vendors.length;i++){
      total += parseFloat(this.vendors[i].balance);
    }
    this.totalOwed = total;
  }

  onDeleteClick(key1:string){
    swal({
      title: 'Are you sure?',
      //text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      width: 400
      
    }).then((result) => {
      if (result.value) {
        this.vendorService.deleteVendor(key1);
        swal(
          'Deleted!',
          'Vendor has been deleted.',
          'success'
        )
      }
    })
      

  }

  

}

