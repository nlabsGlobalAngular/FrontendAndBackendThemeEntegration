import { Routes } from '@angular/router';
import { FlayoutComponent } from './ui/frontend/flayout/flayout.component';
import { BlayoutComponent } from './ui/backend/blayout/blayout.component';
import { BhomeComponent } from './ui/backend/bhome/bhome.component';
import { FhomeComponent } from './ui/frontend/fhome/fhome.component';

export const routes: Routes = [
    {
        path: "",
        component: FlayoutComponent,
        children: [
            {
                path: "",
                component: FhomeComponent
            }
        ]
    },
    {
        path: "dashboard",
        component: BlayoutComponent,
        children: [
            {
                path: "",
                component: BhomeComponent
            }
        ]
    }
];
