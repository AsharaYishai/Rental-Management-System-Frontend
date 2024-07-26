import { Routes } from '@angular/router';
import { CustomerManagementComponent } from './page/customer-management/customer-management.component';
import { ViewAllCustomerComponent } from './page/view-all-customer/view-all-customer.component';
import { ItemManagementComponent } from './page/item-management/item-management.component';
import { ViewAllItemComponent } from './page/view-all-item/view-all-item.component';

export const routes: Routes = [
    {
        path:"add-customer",
        component:CustomerManagementComponent
    },
    {
        path:"view-all-customer",
        component:ViewAllCustomerComponent
    },
    {
        path:"add-item",
        component:ItemManagementComponent
    },
    {
        path:"view-all-item",
        component:ViewAllItemComponent
    }
];
