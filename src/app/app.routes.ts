import { HomePageComponent } from "@/app/pages/home-page/home-page.component";
import { NotFoundPageComponent } from "@/app/pages/not-found-page/not-found-page.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomePageComponent,
  },
  {
    path: "**",
    component: NotFoundPageComponent,
  },
];
