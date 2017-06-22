import {TaskCompletion} from './task-completion';

export class Task {
    id: number;
    name: string;
    points: number;
    priority: number;
    task_completions: TaskCompletion[];
    created_at: Date;
    updated_at?: Date;
}
