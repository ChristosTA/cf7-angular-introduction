import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { ManyPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-simple-database-example',
  imports: [ SimpleDatatableComponent ],
  templateUrl: './simple-database-example.component.html',
  styleUrl: './simple-database-example.component.css'
})
export class SimpleDatabaseExampleComponent {
  manyPerson = ManyPerson;

}
