import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-all-customer',
  standalone: true,
  imports: [NavComponent,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './view-all-customer.component.html',
  styleUrl: './view-all-customer.component.css'
})
export class ViewAllCustomerComponent {

  public customerList:any;

  constructor(private http:HttpClient){
    this.loadcustomerTable();
  }

  loadcustomerTable(){
    this.http.get("http://localhost:8080/customer-controller/get-all-customer").subscribe(res=>{
      this.customerList=res;
      console.log(res);
      
    })
  }

}
