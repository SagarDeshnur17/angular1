import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';



const routes: Routes = [

{
	path: "login",
	component:  LoginPageComponent
},
{
	path: "logout",
	component:  LogoutPageComponent
},

{
	path: "home",
	component:  HomePageComponent
},

{
	path: "Register",
	component:  RegisterPageComponent
},



{
	path: "",
	redirectTo: "/login",
	pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
