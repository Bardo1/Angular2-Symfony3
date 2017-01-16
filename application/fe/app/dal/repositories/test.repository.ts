import { BaseRepository } from './base.repository';

import { Test } from '../dto/test';

export class TestRepository extends BaseRepository<Test> {

    private apiUrl = 'apii/tests';

    getAll(): Promise<Array<Test>> {
        return super.getAll(this.apiUrl);
    }

    getTest(id: number): Promise<Test> {
        return super.getEntity(this.apiUrl, id);
    }

    postTest(entity: Test): Promise<Test> {
        return super.postEntity(this.apiUrl, entity);
    }
}