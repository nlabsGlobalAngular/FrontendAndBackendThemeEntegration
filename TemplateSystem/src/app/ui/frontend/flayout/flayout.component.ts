import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FfooterComponent } from './ffooter/ffooter.component';
import { FheaderComponent } from './fheader/fheader.component';
import { FnavbarComponent } from './fnavbar/fnavbar.component';

@Component({
  selector: 'app-flayout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FfooterComponent, FheaderComponent, FnavbarComponent],
  templateUrl: './flayout.component.html',
})
export class FlayoutComponent {
ON: any;

}
