import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';


export class AppRoutes {
    public static getRoutes() : Routes {
        return [
            { path : '', component : DashboardComponent, canActivate : [AuthGuard] },
            { path : 'login', component :  LoginComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ]
    }
}