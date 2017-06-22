import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../models/task';
import { TaskCompletion } from '../../../models/task-completion';
import { ApiService } from '../../../services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  last_completion: TaskCompletion;
  should_be_done_by: any;
  time_to_complete: any;
  priorityColor: any;
  late: boolean;
  loading = 'Complete';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getLastCompletion();
  }

  getLastCompletion = () => {
    this.last_completion = this.task.task_completions[this.task.task_completions.length - 1];
    this.should_be_done_by = moment(this.last_completion.created_at).add(this.task.priority, 'hours');
    this.time_to_complete = moment(this.should_be_done_by).fromNow();
    this.late = moment().isAfter(this.should_be_done_by);
    this.priorityColor = this.getPriorityColor();
  }

  completeTask = () => {
    this.loading = 'Hang on..';
    this.apiService.completeTask(this.task).then(() => {
      this.loading = 'Completed';
      this.getLastCompletion();
    })
  }

  getPriorityColor = () => {
    const lateColor = 'red';
    const warnColor = 'yellow';
    const onTimeColor = 'green';
    if (this.late) {
      return lateColor;
    }
    return onTimeColor;
  }

}
