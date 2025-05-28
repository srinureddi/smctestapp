import { Routes } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

export const routes: Routes = [
    { path: '', redirectTo: 'compose', pathMatch: 'full' }, // Default route
    { path: 'compose', component: ComposeMessageComponent }
];
