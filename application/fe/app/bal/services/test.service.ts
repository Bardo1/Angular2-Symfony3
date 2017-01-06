import { Injectable } from '@angular/core';

import { TestRepository } from '../../dal/repositories/test.repository';
import { Test } from '../../dal/dto/test';

@Injectable()
export class TestService {
    
    constructor(private testRepository: TestRepository) { }

    getAllTests(): Promise<Array<Test>> {
        return this.testRepository.getAllTests();
    }

    getTest(key: string): Promise<Test> {
        return this.testRepository.getTest(key);
    }

    postTest(entity: Test): Promise<Test> {
        return this.testRepository.postTest(entity);
    }
}