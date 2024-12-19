import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { RecoverComponent } from './components/auth/recover/recover.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'Auth' , pathMatch: 'full'
    },
    
            {
                path: 'login',
                component: LoginComponent
             },
            {
                path: 'register',
                 component: RegisterComponent
            },
            {
                path: 'recover',
                component: RecoverComponent
            }
            
        
    

];
