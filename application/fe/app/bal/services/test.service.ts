import { Injectable } from '@angular/core';

import { TestRepository } from '../../dal/repositories/test.repository';
import { Test } from '../../dal/dto/test';

@Injectable()
export class TestService {
    
    constructor(private testRepository: TestRepository) { }

    getAllTests(): Promise<Array<Test>> {
        return this.testRepository.getAll();
    }

    getTest(id: number): Promise<Test> {
        return this.testRepository.getTest(id);
    }

    postTest(entity: Test): Promise<Test> {
        return this.testRepository.postTest(entity);
    }
}