import * as faker from 'faker';
import {User} from '../models/user';
import {Commune} from '../models/commune';
import {Task} from '../models/task';
import {TaskCompletion} from '../models/task-completion';



/* tslint:disable */
export const commune1Users: User[] = [
  { id: 9990, username: faker.internet.userName(), name: faker.name.findName(), email: faker.internet.email(), created_at: new Date(2017, 1, 1) },
  { id: 9991, username: faker.internet.userName(), name: faker.name.findName(), email: faker.internet.email(), created_at: new Date(2017, 1, 1) },
  { id: 9992, username: faker.internet.userName(), name: faker.name.findName(), email: faker.internet.email(), created_at: new Date(2017, 1, 1) },
  { id: 9993, username: faker.internet.userName(), name: faker.name.findName(), email: faker.internet.email(), created_at: new Date(2017, 1, 1) },
  { id: 9994, username: faker.internet.userName(), name: faker.name.findName(), email: faker.internet.email(), created_at: new Date(2017, 1, 1) }
]

export const commune2Users: User[] = [
  { id: 9995, username: faker.internet.userName(), name: faker.name.findName(), email: faker.internet.email(), created_at: new Date(2017, 1, 1) },
  { id: 9996, username: faker.internet.userName(), name: faker.name.findName(), email: faker.internet.email(), created_at: new Date(2017, 1, 1) },
  { id: 9997, username: faker.internet.userName(), name: faker.name.findName(), email: faker.internet.email(), created_at: new Date(2017, 1, 1) },
  { id: 9998, username: faker.internet.userName(), name: faker.name.findName(), email: faker.internet.email(), created_at: new Date(2017, 1, 1) },
  { id: 9999, username: faker.internet.userName(), name: faker.name.findName(), email: faker.internet.email(), created_at: new Date(2017, 1, 1) }
]

export const tasks1: Task[] = [
  { id: 9990, task_completions: [], name: faker.hacker.ingverb(), points: Math.floor((Math.random() * 100) + 1), priority: Math.floor((Math.random() * 100) + 1), created_at: new Date(2017, 1, 1) },
  { id: 9991, task_completions: [], name: faker.hacker.ingverb(), points: Math.floor((Math.random() * 100) + 1), priority: Math.floor((Math.random() * 100) + 1), created_at: new Date(2017, 1, 1) },
  { id: 9992, task_completions: [], name: faker.hacker.ingverb(), points: Math.floor((Math.random() * 100) + 1), priority: Math.floor((Math.random() * 100) + 1), created_at: new Date(2017, 1, 1) },
  { id: 9993, task_completions: [], name: faker.hacker.ingverb(), points: Math.floor((Math.random() * 100) + 1), priority: Math.floor((Math.random() * 100) + 1), created_at: new Date(2017, 1, 1) },
  {id: 9994, task_completions: [], name: faker.hacker.ingverb(), points: Math.floor((Math.random() * 100) + 1), priority: Math.floor((Math.random() * 100) + 1),  created_at: new Date(2017, 1, 1) }
]

export const tasks2: Task[] = [
  { id: 9995, task_completions: [], name: faker.hacker.ingverb(), points: Math.floor((Math.random() * 100) + 1), priority: Math.floor((Math.random() * 100) + 1), created_at: new Date(2017, 1, 1) },
  { id: 9996, task_completions: [], name: faker.hacker.ingverb(), points: Math.floor((Math.random() * 100) + 1), priority: Math.floor((Math.random() * 100) + 1), created_at: new Date(2017, 1, 1) },
  { id: 9997, task_completions: [], name: faker.hacker.ingverb(), points: Math.floor((Math.random() * 100) + 1), priority: Math.floor((Math.random() * 100) + 1), created_at: new Date(2017, 1, 1) },
  { id: 9998, task_completions: [], name: faker.hacker.ingverb(), points: Math.floor((Math.random() * 100) + 1), priority: Math.floor((Math.random() * 100) + 1), created_at: new Date(2017, 1, 1) },
  { id: 9999, task_completions: [], name: faker.hacker.ingverb(), points: Math.floor((Math.random() * 100) + 1), priority: Math.floor((Math.random() * 100) + 1),  created_at: new Date(2017, 1, 1) }
]
for (let t = 0; t < tasks1.length; t++){
  for (let i = 1; i < 100; i++){
    let user1 = commune1Users[Math.floor((Math.random() * 5))];
    let user2 = commune2Users[Math.floor((Math.random() * 5))];

    tasks1[t].task_completions.push({
      id: i,
      task_id: tasks1[t].id,
      user_id: user1.id,
      created_at: faker.date.past(),
      user_name: user1.name
    });
    tasks2[t].task_completions.push({
      id: i+100,
      task_id: tasks2[t].id,
      user_id: user2.id,
      created_at: faker.date.past(),
      user_name: user2.name
    });
  }
}


export const purchases_1 = [];
export const purchases_2 = [];

for (let i = 1; i < 100; i++) {
  purchases_1.push({
    id: i,
    amount: (Math.random() * 1000) + 1,
    description: faker.commerce.productName(),
    user_id: Math.floor((Math.random() * 5) + 9990),
    created_at: faker.date.past()
  })
}

for (let i = 100; i < 200; i++) {
  purchases_2.push({
    id: i,
    amount: (Math.random() * 1000) + 1,
    description: faker.commerce.productName(),
    user_id: Math.floor((Math.random() * 5) + 9995),
    created_at: faker.date.past()
  })
}


export const commune1: Commune = {
  id: 1,
  name: "Feikkikommuuni 1",
  users: commune1Users,
  purchases: purchases_1,
  tasks: tasks1
}

export const commune2: Commune = {
  id: 2,
  name: "Feikkikommuuni 2",
  users: commune2Users,
  purchases: purchases_2,
  tasks: tasks2
}
