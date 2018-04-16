import { NewUserComponent } from '../../components/new-user/new-user.component'
import { UserDetailsComponent } from '../../components/user-details/user-details.component'
import { Routes } from "@angular/router"

// export const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: UserDetailsComponent },
//   { path: 'newUser', component: NewUserComponent }
// ]

export const routes: Routes = [
  { path: 'create',
    component: NewUserComponent
  },
  { path: 'index',
    component: UserDetailsComponent
  }
];