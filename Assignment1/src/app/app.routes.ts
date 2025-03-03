import { Routes } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { UserComponent } from './auth-user/user/user.component';
import { RegisterComponent } from './auth-user/register/register.component';
import { ForgorpComponent } from './auth-user/forgorp/forgorp.component';

export const routes: Routes = [
    {
        path:'login',
        component :LoginComponent
    },
    {
        path:'user',
        component:UserComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'forgorp',
        component:ForgorpComponent
    }
];
