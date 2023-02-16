import { Component, OnInit } from '@angular/core';
import { LogEventInterface } from '../data/log-event.interface';
import { Form, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'is-mike-legal';
  form: FormControl = new FormControl();
  countries = [{
      name: 'Germany',
      status: 'Legal'
  },
      {
          name: 'Egypt',
          status: 'Legal'
      },
      {
          name: 'Oman',
          status: 'Unknown'
      },
      {
          name: 'UAE',
          status: 'Legal'
      }];
    countryList: string[] = this.countries.map(country => country.name);


    ngOnInit(): void {
      this.form = new FormControl(null, [
          Validators.required,
      ]);
  }

  get legalStatus(): string {
      if (!this.form?.value) {
          return '';
      }
      const foundCountry = this.countries.filter(country => country.name === this.form?.value);
      if (foundCountry.length) {
          return foundCountry[0].status;
      }
      return '';
  }

    get isLegal(): boolean {
        if (!this.form?.value) {
            return false;
        }
        const foundCountry = this.countries.filter(country => country.name === this.form?.value);
        if (foundCountry.length) {
            return foundCountry[0].status === 'Legal';
        }
        return false;
    }

  get eventLogs(): LogEventInterface[] {
      return [{
          title: 'Enters Germany, and is considered legal.',
          timestamp: new Date('02/16/2023'),
          emoji: '🚨'
      },
          {
              title: 'Stopped by border control because of an old police case.',
              timestamp: new Date('02/16/2023')
          },
          {
              title: 'Departed from Dubai and is on his way to Munich.',
              timestamp: new Date('02/16/2023')
          },
          {
              title: 'Flight replacement found.',
              timestamp: new Date('02/16/2023')
          },
          {
              title: 'Goes to the airport without a replacement.',
              timestamp: new Date('02/16/2023')
          },
          {
              title: 'Looking for a flight replacement.',
              timestamp: new Date('02/15/2023')
          },
          {
              title: 'Mikes flight gets canceled.',
              timestamp: new Date('02/15/2023')
          },
          {
              title: 'Driven back by a random Russian guy to Dubai.',
              timestamp: new Date('02/04/2023')
          },
          {
              title: 'Denied access to Oman. Left standing in the middle of nowhere.',
              timestamp: new Date('02/04/2023')
          },
          {
              title: 'Leaves for a road trip to Oman.',
              timestamp: new Date('02/04/2023')
          },
          {
              title: 'Receives an email about registration issues in Germany.',
              timestamp: new Date('01/27/2023')
          },
          {
              title: 'Flew back to Dubai, UAE.',
              timestamp: new Date('01/20/2023')
          },
          {
              title: 'Released after 6 hours in airport prison.',
              timestamp: new Date('01/14/2023')
          },
          {
              title: 'Detained until a replacement flight is found.',
              timestamp: new Date('01/14/2023')
          },
          {
              title: 'Denied entry toto Caru, Egypt.',
              timestamp: new Date('01/14/2023'),
          },
          {
              title: 'Leaves for trip to Caru, Egypt.',
              timestamp: new Date('01/14/2023'),
          },
      ]
  }
}
