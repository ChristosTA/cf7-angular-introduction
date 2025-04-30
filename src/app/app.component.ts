import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Christos';

  // Step 1: One way binding of data
  // person = {
  //   giveName: 'Christos',
  //   surName: 'Tartari',
  //   age: 28,
  //   email: 'Christos@aueb.gr'
  // }

  // //step 3: Component Input
  // person0:Person = {
  //   givenName: "Christodoulos",
  //   surName: "Fragkoudakis",
  //   age:55,
  //   email: "Chfrag@aueb.gr",
  //   address: "Athens, Greece"
  // }

  // person1:Person = {
  //   givenName: "John",
  //   surName: "Doe",
  //   age: 55,
  //   email: "john@example.com",
  //   address: "New york. USA"
  // }

  
}
