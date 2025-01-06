import {Injectable} from '@nestjs/common';
import {Task, TaskStatus} from "./task.model";
import * as uuid from 'uuid';
import {CreateTaskDto} from "./dto/create-task.dto";

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    /***
     Return All Tasks
     */
    getAllTasks(): Task[] {
        return this.tasks;
    }

    /***
     Return single Task by Id
     */
    getTaskById(id: string): Task {
        return  this.tasks.find(task => task.id === id);
    }

    /***
     Store new Task
     */
    createTask(createTaskDto: CreateTaskDto): Task {

        const {title, description} = createTaskDto;

        const task: Task = {
            id: uuid.v1(),
            title,
            description,
            status: TaskStatus.OPEN,
        }
       this.tasks.push(task);

        return task;
    }

    /***
     Delete a task by ID
     */
    deleteTaskById(id: string): Task {
        const arrayIndex: number = this.tasks.findIndex(task => task.id === id);

        if (arrayIndex !== -1) {
            return this.tasks.splice(arrayIndex, 1)[0]; // Remove and return the task at the found index
        }
    }
}
