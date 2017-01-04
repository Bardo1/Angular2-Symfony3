import { Injectable } from '@angular/core';

import { TestRepository } from '../../dal/repositories/test.repository';
import { Test } from '../../dal/entities/test';

@Injectable()
export class TestService {
    
    constructor(private testRepository: TestRepository) { }

    getTest(): Promise<Test> {
        return this.testRepository.getTest();
    }
}