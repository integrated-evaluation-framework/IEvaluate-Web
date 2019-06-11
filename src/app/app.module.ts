import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ApplicationListComponent} from './application-list/application-list.component';
import {AppRoutingModule} from './app-routing.module';
import {StorageServiceModule} from 'angular-webstorage-service';
import {GLOBAL_SESSION_INFO, SessionInfo} from './models/sessioninfo';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChartsModule} from 'ng2-charts';
import {MetricGraphVisualizationComponent} from './metric-graph-visualization/metric-graph-visualization.component';
import {FormsModule} from '@angular/forms';
import {EvaluateListComponent} from './evaluate-list/evaluate-list.component';
import {EvaluateDetailModalComponent} from './evaluate-detail-modal/evaluate-detail-modal.component';
import {AnnotateFormComponent} from './annotate-form/annotate-form.component';
import {BaselineExplorerComponent} from './baseline-explorer/baseline-explorer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ModalModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    DashboardComponent,
    MetricGraphVisualizationComponent,
    EvaluateListComponent,
    EvaluateDetailModalComponent,
    AnnotateFormComponent,
    BaselineExplorerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    StorageServiceModule,
    ChartsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{provide: GLOBAL_SESSION_INFO, useExisting: SessionInfo}, SessionInfo],
  bootstrap: [AppComponent]
})
export class AppModule {
}
