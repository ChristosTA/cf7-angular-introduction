import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent, EventBindExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Christos';

  // Step 1: One way binding of data
  person = {
    giveName: 'Christos',
    surName: 'Tartari',
    age: 28,
    email: 'Christos@aueb.gr'
  }

  //step 3: Component Input
  person0:Person = {
    givenName: "Christodoulos",
    surName: "Fragkoudakis",
    age:55,
    email: "Chfrag@aueb.gr",
    address: "Athens, Greece"
  }

  person1:Person = {
    givenName: "John",
    surName: "Doe",
    age: 55,
    email: "john@example.com",
    address: "New york. USA"
  }

  users: Person[] = [
    {
      "givenName": "Merrile",
      "surName": "Tock",
      "email": "mtock0@shop-pro.jp",
      "age": 1,
      "address": "Apt 276"
    }, {
      "givenName": "Evvie",
      "surName": "Siely",
      "email": "esiely1@typepad.com",
      "age": 2,
      "address": "Apt 707"
    }, {
      "givenName": "Katheryn",
      "surName": "Henkmann",
      "email": "khenkmann2@live.com",
      "age": 3,
      "address": "PO Box 60350"
    }, {
      "givenName": "Beniamino",
      "surName": "Fone",
      "email": "bfone3@mapquest.com",
      "age": 4,
      "address": "PO Box 75372"
    }, {
      "givenName": "Brade",
      "surName": "Iwanowicz",
      "email": "biwanowicz4@timesonline.co.uk",
      "age": 5,
      "address": "Room 450"
    }, {
      "givenName": "Son",
      "surName": "Lodin",
      "email": "slodin5@amazonaws.com",
      "age": 6,
      "address": "10th Floor"
    }, {
      "givenName": "Leonerd",
      "surName": "Caddie",
      "email": "lcaddie6@yelp.com",
      "age": 7,
      "address": "Room 1362"
    }, {
      "givenName": "Alric",
      "surName": "Camsey",
      "email": "acamsey7@histats.com",
      "age": 8,
      "address": "PO Box 12481"
    }, {
      "givenName": "Loutitia",
      "surName": "Raecroft",
      "email": "lraecroft8@shinystat.com",
      "age": 9,
      "address": "PO Box 55147"
    }, {
      "givenName": "Ray",
      "surName": "Lomasny",
      "email": "rlomasny9@ted.com",
      "age": 10,
      "address": "Room 480"
    }, {
      "givenName": "Margalit",
      "surName": "Jedrzejczak",
      "email": "mjedrzejczaka@alexa.com",
      "age": 11,
      "address": "PO Box 37477"
    }, {
      "givenName": "Elise",
      "surName": "Rattry",
      "email": "erattryb@youku.com",
      "age": 12,
      "address": "Suite 91"
    }, {
      "givenName": "Claudine",
      "surName": "Escalera",
      "email": "cescalerac@woothemes.com",
      "age": 13,
      "address": "Apt 493"
    }, {
      "givenName": "Harland",
      "surName": "Kibblewhite",
      "email": "hkibblewhited@bloglines.com",
      "age": 14,
      "address": "Room 1113"
    }, {
      "givenName": "Wendeline",
      "surName": "Reichardt",
      "email": "wreichardte@upenn.edu",
      "age": 15,
      "address": "Suite 90"
    }, {
      "givenName": "Sari",
      "surName": "Burkhill",
      "email": "sburkhillf@usatoday.com",
      "age": 16,
      "address": "PO Box 78986"
    }, {
      "givenName": "Gert",
      "surName": "Josling",
      "email": "gjoslingg@si.edu",
      "age": 17,
      "address": "Room 230"
    }, {
      "givenName": "Ben",
      "surName": "Gowry",
      "email": "bgowryh@cam.ac.uk",
      "age": 18,
      "address": "Suite 39"
    }, {
      "givenName": "Agace",
      "surName": "Youings",
      "email": "ayouingsi@google.de",
      "age": 19,
      "address": "Room 710"
    }, {
      "givenName": "Jolie",
      "surName": "Molder",
      "email": "jmolderj@skyrock.com",
      "age": 20,
      "address": "PO Box 37678"
    }
  ]
}
