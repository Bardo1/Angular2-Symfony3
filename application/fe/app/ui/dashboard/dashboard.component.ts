import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TestService } from '../../bal/services/test.service';
import { Test } from '../../dal/entities/test';

@Component({
  selector: 'dashboard',
  templateUrl: './app/ui/dashboard/dashboard.component.html',
})
export class DashboardComponent implements OnInit { 
  test: Test;
  constructor (private testService: TestService) {}

  ngOnInit(): void {
    this.testService.getTest().then(test => this.test = test);
  }
}
