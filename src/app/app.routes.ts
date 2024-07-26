import { Routes } from '@angular/router';
import { CustomerManagementComponent } from './page/customer-management/customer-management.component';
import { ViewAllCustomerComponent } from './page/view-all-customer/view-all-customer.component';

export const routes: Routes = [
    {
        path:"add-customer",
        component:CustomerManagementComponent
    },
    {
        path:"view-all-customer",
        component:ViewAllCustomerComponent
    }
];
