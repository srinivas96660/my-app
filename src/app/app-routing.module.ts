import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { ClotheComponent } from './clothe/clothe.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployregeistrationComponent } from './employregeistration/employregeistration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { EventregistationComponent } from './eventregistation/eventregistation.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { FootbalComponent } from './footbal/footbal.component';
import { GpayComponent } from './gpay/gpay.component';
import { HooksComponent } from './hooks/hooks.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PostComponent } from './post/post.component';
import { RatingsComponent } from './ratings/ratings.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VechicleComponent } from './vechicle/vechicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:"dashboard", component:DashboardComponent, children:[
    {path:"calculator", component:CalculatorComponent},
    {path:"interpolation", component:InterpolationComponent},
    {path:"event-binding", component:EventbindingComponent},
    {path:"two-way-binding", component:TwowaybindingComponent},
    {path:"rectangle", component:RectangleComponent},
    {path:"event-registration", component:EventregistationComponent, canDeactivate:[NotifyGuard]},
    {path:"employregeistration", component:EmployregeistrationComponent, canDeactivate:[NotifyGuard] },
    {path:"cart", component:CartComponent},
    {path:"pipes", component:PipesComponent},
    {path:"cars", component:CarsComponent},
    {path:"ratings", component:RatingsComponent},
    {path:"clothe", component:ClotheComponent},
    {path:"gpay",component:GpayComponent},
    {path:"bank", component:BankComponent},
    {path:"hooks", component:HooksComponent},
    {path:"vechicle", component:VechicleComponent},
    {path:"post", component:PostComponent},
    {path:"flipkart", component:FlipkartComponent},
    {path:"mail", component:MailComponent},
    {path:"footbal", component:FootbalComponent},
    {path:"vehicle-details/:id", component:VehicleDetailsComponent},
    {path:"bank-details/:id", component:BankDetailsComponent},
    {path:"create-account", component:CreateAccountComponent, canDeactivate:[NotifyGuard]},
    {path: "create-user", component:CreateUserComponent}


  ]},
  {path:"", component:LoginComponent},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
