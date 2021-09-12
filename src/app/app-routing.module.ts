import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users', component: ListUserComponent},
  { path: 'user/:userId', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
