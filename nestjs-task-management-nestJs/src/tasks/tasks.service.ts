import {Injectable} from '@nestjs/common';
import {Task, TaskStatus} from "./task.model";
import * as uuid from 'uuid';
import {CreateTaskDto} from "./dto/create-task.dto";

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return  this.tasks.find(task => task.id === id);
    }

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

    deleteTaskById(id: string): Task {
        const arrayIndex: number = this.tasks.findIndex(task => task.id === id);

        if (arrayIndex !== -1) {
            return this.tasks.splice(arrayIndex, 1)[0]; // Remove and return the task at the found index
        }
    }
}
