import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ApplicationListComponent} from './application/application-list.component';
import {AppRoutingModule} from './app-routing.module';
import {StorageServiceModule} from 'angular-webstorage-service';
import {GLOBAL_SESSION_INFO, SessionInfo} from './models/sessioninfo';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChartsModule} from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    ChartsModule
  ],
  providers: [{provide: GLOBAL_SESSION_INFO, useExisting: SessionInfo}, SessionInfo],
  bootstrap: [AppComponent]
})
export class AppModule {
}
