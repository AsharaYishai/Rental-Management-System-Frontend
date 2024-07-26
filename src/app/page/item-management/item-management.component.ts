import { Component } from '@angular/core';
import { ItemNavComponent } from '../../common/item-nav/item-nav.component';

@Component({
  selector: 'app-item-management',
  standalone: true,
  imports: [ItemManagementComponent,ItemNavComponent],
  templateUrl: './item-management.component.html',
  styleUrl: './item-management.component.css'
})
export class ItemManagementComponent {

}
