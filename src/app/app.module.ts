import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EventregistationComponent } from './eventregistation/eventregistation.component';
import { EmployregeistrationComponent } from './employregeistration/employregeistration.component';
import { CartComponent } from './cart/cart.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { PercentagePipe } from './percentage.pipe';
import { CarsComponent } from './cars/cars.component';
import { RatingsComponent } from './ratings/ratings.component';
import { PipepracticePipe } from './pipepractice.pipe';
import { StudyPipe } from './study.pipe';
import { ClothesPipe } from './clothes.pipe';
import { ClotheComponent } from './clothe/clothe.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import { HooksComponent } from './hooks/hooks.component';
import { HttpClientModule} from '@angular/common/http';
import { VechicleComponent } from './vechicle/vechicle.component';
import { PostComponent } from './post/post.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { FootbalComponent } from './footbal/footbal.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    InterpolationComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    RectangleComponent,
    EventregistationComponent,
    EmployregeistrationComponent,
    CartComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    PercentagePipe,
    CarsComponent,
    RatingsComponent,
    PipepracticePipe,
    StudyPipe,
    ClothesPipe,
    ClotheComponent,
    GpayComponent,
    BankComponent,
    HooksComponent,
    VechicleComponent,
    PostComponent,
    FlipkartComponent,
    MailComponent,
    FootbalComponent,
    VehicleDetailsComponent,
    BankDetailsComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
