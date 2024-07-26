import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-management',
  standalone: true,
  imports: [NavComponent,HttpClientModule,FormsModule,CommonModule],
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.css'
})
export class CustomerManagementComponent {

  public customerObj={
    name:"",
    city:"",
    contact:""
  }

  constructor(private http:HttpClient){

  }

  addCustomer(){
    this.http.post("http://localhost:8080/customer-controller/add-customer",this.customerObj).subscribe(
      (data=>{
        Swal.fire({
          title: "Customer Added!",
          text: "You clicked the button!",
          icon: "success"
        });
        console.log(data);
        
      }
    )
  )}
}
