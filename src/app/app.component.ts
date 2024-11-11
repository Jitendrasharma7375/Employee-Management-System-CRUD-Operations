import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Toast, ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet,RouterLink,ToastrModule]
})
export class AppComponent {
  title = 'Employee Management System';
}
