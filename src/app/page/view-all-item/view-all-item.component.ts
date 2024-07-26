import { Component } from '@angular/core';
import { ItemManagementComponent } from '../item-management/item-management.component';
import { ItemNavComponent } from '../../common/item-nav/item-nav.component';

@Component({
  selector: 'app-view-all-item',
  standalone: true,
  imports: [ItemManagementComponent,ItemNavComponent],
  templateUrl: './view-all-item.component.html',
  styleUrl: './view-all-item.component.css'
})
export class ViewAllItemComponent {

}
