import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationListComponent} from './application-list/application-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EvaluateListComponent} from './evaluate-list/evaluate-list.component';
import {AnnotateFormComponent} from './annotate-form/annotate-form.component';
import {BaselineExplorerComponent} from './baseline-explorer/baseline-explorer.component';

const routes: Routes = [
  {path: 'apps', component: ApplicationListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'evaluate', component: EvaluateListComponent},
  {path: 'annotate', component: AnnotateFormComponent},
  {path: 'baseline', component: BaselineExplorerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

