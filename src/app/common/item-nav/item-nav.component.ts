import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-nav.component.html',
  styleUrl: './item-nav.component.css'
})
export class ItemNavComponent {

}
