import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  imports: [ PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Takis',
    surName: 'Patatakis',
    age: 60,
    email: 'Patak@aueb.gr',
    address: 'New York, Usa'
  }

  person1: Person = {
    givenName: 'akis',
    surName: 'palatakis',
    age: 39,
    email: 'akis@aueb.gr',
    address: 'Paris, France'
  }

}
