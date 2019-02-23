import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { SpotifyAuthGuard } from '@workspace/core-data';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [SpotifyAuthGuard] },
  { path: 'login', component: HomeComponent },
  { path: 'callback', component: CallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }