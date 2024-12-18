import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: async () =>
      (await import("@/app/pages/home-page/home-page.component"))
        .HomePageComponent,
    title: "Home",
  },
  {
    path: "**",
    loadComponent: async () =>
      (await import("@/app/pages/not-found-page/not-found-page.component"))
        .NotFoundPageComponent,
    title: "Not Found",
  },
];
