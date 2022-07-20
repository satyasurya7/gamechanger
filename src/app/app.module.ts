import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { GindividualsComponent } from './gindividuals/gindividuals.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CompaniesComponent } from './companies/companies.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    HomeComponent,
    AboutComponent,
    IndividualsComponent,
    GindividualsComponent,
    OrganizationsComponent,
    CompaniesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
