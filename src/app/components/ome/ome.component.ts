import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ome',
  imports: [FormsModule],
  templateUrl: './ome.component.html',
  styleUrl: './ome.component.css'
})
export class OmeComponent {

  roomId: string = '';
  route = inject(Router);
  enterRoom() {
    console.log(this.roomId);
    this.route.navigate([`/room/${this.roomId}`]);
  }


}
