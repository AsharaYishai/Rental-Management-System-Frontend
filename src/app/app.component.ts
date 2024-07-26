import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { CustomerManagementComponent } from './page/customer-management/customer-management.component';
import { ItemManagementComponent } from './page/item-management/item-management.component';
import { RentalManagementComponent } from './page/rental-management/rental-management.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,CustomerManagementComponent,ItemManagementComponent,RentalManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-system-app';
}
