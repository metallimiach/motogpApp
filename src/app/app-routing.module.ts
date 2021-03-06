import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { CalendarComponent } from '././components/calendar.component';
import { TeamComponent } from '././components/teams.component';
import { RiderComponent } from '././components/riders.component';
import { EventComponent } from '././components/event.component';
import { ResultsComponent } from "./components/results.component";

const routes: Routes = [
    { path: '', redirectTo: '/calendar', pathMatch: 'full' },
    { path: 'calendar', component: CalendarComponent },
    { path: 'teams', component: TeamComponent },
    { path: 'riders', component: RiderComponent },
    { path: 'event/:id', component: EventComponent },
    { path: 'results', component: ResultsComponent },
    { path: '**', redirectTo: '/calendar' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }