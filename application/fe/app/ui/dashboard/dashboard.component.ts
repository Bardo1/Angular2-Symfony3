import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TestService } from '../../bal/services/test.service';
import { Test } from '../../dal/dto/test';

@Component({
  selector: 'dashboard',
  templateUrl: './app/ui/dashboard/dashboard.component.html',
})
export class DashboardComponent implements OnInit { 
  model = new Test('',0);

  tests: Array<Test>;

  submitted = false;
  error = false;

  constructor (private testService: TestService) {}

  ngOnInit(): void {
    this.testService.getAllTests().then(tests => this.tests = tests);
  }

  addTest(form: any): void {
    this.submitted = true;
    this.error = false;
    this.testService.postTest(this.model)
      .then(res => {
        this.tests.push(res);
        this.submitted = false;
        this.error = false;
        form.reset();
      })
      .catch(() => {
        this.submitted = false;
        this.error = true;
      });
  }

  get diagnostic() { return JSON.stringify(this.model);}
}
