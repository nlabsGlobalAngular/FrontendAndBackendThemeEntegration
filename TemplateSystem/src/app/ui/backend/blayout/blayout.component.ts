import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BnavbarComponent } from "./bnavbar/bnavbar.component";
import { BsidebarComponent } from "./bsidebar/bsidebar.component";
import { BfooterComponent } from "./bfooter/bfooter.component";

@Component({
    selector: 'app-blayout',
    standalone: true,
    templateUrl: './blayout.component.html',
    imports: [RouterOutlet, RouterLink, BnavbarComponent, BsidebarComponent, BfooterComponent]
})
export class BlayoutComponent {

}
