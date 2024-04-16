import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './components/document/document.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  {path: 'document', component:DocumentComponent},
  {path: 'summary', component:SummaryComponent},
  {path: '', redirectTo: '/document', pathMatch: 'full'},
  {path: '**', component: DocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
