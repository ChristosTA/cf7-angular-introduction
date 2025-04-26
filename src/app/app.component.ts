import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Christos';

  person = {
    giveName: 'Christos',
    surName: 'Tartari',
    age: 28,
    email: 'Christos@aueb.gr'
  }
}
