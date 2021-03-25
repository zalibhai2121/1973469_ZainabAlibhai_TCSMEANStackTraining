import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyAuthGuard } from './myauthguard';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '\signup', component: SignupComponent},
  {path: '\login', component: LoginComponent},
  {path: '\portfolio', component: PortfolioComponent, canActivate: [MyAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
