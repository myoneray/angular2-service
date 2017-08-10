import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InjectorComponent } from './injector/injector.component';
import { HomeComponent } from './home/home.component';

// MyService

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'injector', component: InjectorComponent },
  { path: 'contactus', redirectTo: 'home' },
];


@NgModule({
  declarations: [
    AppComponent,
    InjectorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
