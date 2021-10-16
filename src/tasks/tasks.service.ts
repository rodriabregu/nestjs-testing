import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
    tasks: Task[] = [
        {
            id: 1,
            title: 'Test1',
            description: 'Hola1',
            done: false
        },
        {
            id: 2,
            title: 'Test2',
            description: 'Hola2',
            done: false
        },
        {
            id: 3,
            title: 'Test3',
            description: 'Hola3',
            done: false
        }
    ]

    getTasks(): Task[] {
        return 
    }

    getTask(id: number ): Task {
        return this.tasks.find( tasks => tasks.id === id);
    }

}
