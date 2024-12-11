import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-not-found-page",
  imports: [RouterLink],
  templateUrl: "./not-found-page.component.html",
  host: { class: "block" },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
