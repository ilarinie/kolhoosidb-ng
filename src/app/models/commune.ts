import { TaskCompletion } from './task-completion';
import { Task } from './task';
import { User } from './user';
import { Purchase } from './purchase';

export class Commune {
    id: number;
    name: string;
    tasks: Task[];
    users: User[];
    purchases: Purchase[];

    constructor(name: string) {
        this.name = name;
    }

}
