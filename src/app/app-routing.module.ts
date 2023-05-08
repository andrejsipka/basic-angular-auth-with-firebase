import { NgModule, inject } from '@angular/core';
import { Route, Router, RouterModule, Routes, UrlSegment } from '@angular/router';
import { tap } from 'rxjs';
// Guards
import { PermissionsService } from './auth/auth.guard';

const routes: Routes = [
    {
        path: 'map',
        // Ways to implement feature flags as well, Cool!
        canMatch: [(route: Route, segments: UrlSegment[]) => {
            return inject(PermissionsService).canMatch();
        }],
        loadChildren: () => import('./map/map.module').then(m => m.MapModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
