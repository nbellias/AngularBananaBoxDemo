import { Routes } from '@angular/router';
import { UserInputComponent } from './components/user-input/user-input.component';

export const routes: Routes = [
    {
        path: '**',
        component: UserInputComponent
    }
];
