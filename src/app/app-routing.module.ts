import { SprintFlowComponent } from './sprint-flow/sprint-flow.component';
import { SprintPendingComponent } from './sprint-pending/sprint-pending.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPendingComponent } from './product-pending/product-pending.component';
import { RolesComponent } from './roles/roles.component';
import { SprintIntroduceComponent } from './sprint-introduce/sprint-introduce.component';
import { TheEndComponent } from './the-end/the-end.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'productPending', component: ProductPendingComponent },
  { path: 'sprintPending', component: SprintPendingComponent },
  { path: 'sprintIntroduce', component: SprintIntroduceComponent },
  { path: 'sprintFlow', component: SprintFlowComponent },
  { path: 'theEndComponent', component: TheEndComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
