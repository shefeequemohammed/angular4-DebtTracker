//Modification History
// Date : 09/12/2017
// Author : Shefeeque Mohammed

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
//npm install firebase angularfire2 --save
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { VendorDetailsComponent } from './components/vendor-details/vendor-details.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component'; 
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
//Custom service for database operations
import { VendorService } from './services/vendor.service';
//service for login authentication
import { AuthService } from './services/auth.service';
//service for 'login' status
import { AuthGuard } from './guards/auth.guard';
// Create Routes
const appRoutes: Routes = [
 {path:'', component: DashboardComponent,canActivate:[AuthGuard]},
 {path:'login', component: LoginComponent},
  {path:'add-vendor', component:AddVendorComponent,canActivate:[AuthGuard]},
 {path:'vendor/:id', component: VendorDetailsComponent,canActivate:[AuthGuard]},
  {path:'**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    VendorsComponent,
    VendorDetailsComponent,
    AddVendorComponent,
    NavbarComponent,
    SidebarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    //expensetrack is the database name in Firebase
    AngularFireModule.initializeApp(environment.firebase, 'expensetrack'),
    AngularFireAuthModule
      ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    VendorService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
