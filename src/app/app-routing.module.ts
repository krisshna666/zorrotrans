import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',loadChildren:()=>import('./pages/home/home.module').then((m)=>m.HomeModule)},
  {path:'settings',loadChildren:()=>import('./pages/settings/settings.module').then((m)=>m.SettingsModule)},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
{path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
