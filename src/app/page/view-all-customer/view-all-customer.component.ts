import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

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

  deleteCustomer(customer:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/customer-controller/delete-customer/${customer.customerId}`,{responseType:'text'}).subscribe(res=>{
          this.loadcustomerTable();
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        })
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }

}
