import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FoodApp';

  constructor(private FlowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }

}
