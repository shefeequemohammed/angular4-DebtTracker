import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Vendor } from '../models/Vendor';

@Injectable()
export class VendorService {

  vendorRef: AngularFireList<any>;
  vendors: Observable<any[]>;
  vendor: Observable<any>;

  constructor(private db: AngularFireDatabase) { 
    this.vendorRef = this.db.list('expense');
    this.vendors = this.vendorRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getClients(){
    return this.vendors;
  }

  newVendor(vendor: Vendor){
    this.vendorRef.push(vendor);
  }

  getVendor(id: string){
    this.vendor = this.db.object('/expense/'+id).valueChanges();
    return this.vendor;
  }

  updateVendor(id: string, vendor:Vendor){
    return this.vendorRef.update(id, vendor);
  }

  deleteVendor(id: string){
    return this.vendorRef.remove(id);
  }

}
