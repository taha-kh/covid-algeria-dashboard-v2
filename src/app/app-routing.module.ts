import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";
import { MapComponent } from './map/map.component';
import { ConseilsComponent } from './conseils/conseils.component';

const appRoutes: Routes = [
    { path: '', component: MapComponent},
    { path: 'conseils', component: ConseilsComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}