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


  ngOnInit(): void {
      this.form = new FormControl(null, [
          Validators.required,
      ]);
  }

  get countryList(): string[] {
      return this.countries.map(country => country.name);
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
      const timestamp = new Date();
      return [{
          title: 'Mike enters Germany, and is considered legal.',
          timestamp
      },
          {
              title: 'Mike is stopped by border control because of an old police case.',
              timestamp
          },
          {
              title: 'Mike departed his flight from Dubai and is on his way to Munich.',
              timestamp
          },
      ]
  }
}
