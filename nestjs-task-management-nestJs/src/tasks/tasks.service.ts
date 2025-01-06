import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

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
   Filter tasks
   */
  getTaskWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks: Task[] = this.getAllTasks();

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    } else if (search) {
      tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search));
    }

    return tasks;
  }

  /***
   Return single Task by Id
   */
  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  /***
   Store new Task
   */
  createTask(createTaskDto: CreateTaskDto): Task {

    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid.v1(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);

    return task;
  }

  /***
   Update Task by id
   */
  updateTaskStatus(id: string, status: TaskStatus): Task {
    const updatedTask: Task = this.tasks.find(task => task.id === id);
    if (!updatedTask) {
      throw new NotFoundException('Task not found');
    }
    updatedTask.status = status;

    return updatedTask;
  }

  /***
   Delete a task by ID
   */
  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
