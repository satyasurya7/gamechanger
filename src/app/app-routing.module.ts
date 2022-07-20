import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CompaniesComponent } from './companies/companies.component';
import { GindividualsComponent } from './gindividuals/gindividuals.component';
import { HomeComponent } from './home/home.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { OrganizationsComponent } from './organizations/organizations.component';

const routes: Routes = [
  {component: TopicsComponent, path:'topics'},
  {component: AboutComponent, path:'about'},
  {component: ContactComponent, path:'contact'},
  {component: CompaniesComponent, path: 'companies'},
  {component: GindividualsComponent, path:'gindividuals'},
  {component:HomeComponent, path:'home'},
  {component:IndividualsComponent, path:'individuals'},
  {component:OrganizationsComponent, path:'organizations'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
