import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home.component';
import { LoadingComponent } from './shared/components/loading.component';
import { ErrorComponent } from './shared/components/error.component';
import { NotFoundComponent } from './shared/components/notFound.component';
import { CoreModule } from './core/core.module';

const routes: Routes = [{
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }, {
    path: "home",
    component: HomeComponent
  }, {
    path: "loading",
    component: LoadingComponent
  },
  {
    path: "core",
    loadChildren: () => CoreModule
  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path: "**", // 404
    redirectTo: "/404",
  },
  {
    path: "404",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
