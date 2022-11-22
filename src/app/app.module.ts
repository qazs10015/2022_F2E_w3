import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RolesComponent } from './roles/roles.component';
import { ProductPendingComponent } from './product-pending/product-pending.component';
import { SprintPendingComponent } from './sprint-pending/sprint-pending.component';
import { SprintIntroduceComponent } from './sprint-introduce/sprint-introduce.component';
import { SprintFlowComponent } from './sprint-flow/sprint-flow.component';
import { RetroComponent } from './retro/retro.component';
import { TheEndComponent } from './the-end/the-end.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { StartButtonComponent } from './shared/layout/start-button/start-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RolesComponent,
    ProductPendingComponent,
    SprintPendingComponent,
    SprintIntroduceComponent,
    SprintFlowComponent,
    RetroComponent,
    TheEndComponent,
    LayoutComponent,
    StartButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
