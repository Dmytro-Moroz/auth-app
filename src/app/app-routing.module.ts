import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
    // './app/auth/auth.module#AuthModule'
}
];