import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import {TasksService} from "./tasks.service";
import { Task, TaskStatus } from './task.model';
import {CreateTaskDto} from "./dto/create-task.dto";

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {
    }

    @Get()
    getAllTasks():  Task[]  {
        const tasks: Task[] = this.taskService.getAllTasks()

        if (tasks.length === 0) {
            throw new NotFoundException('No tasks found.');
        }
       return tasks
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        const task: Task = this.taskService.getTaskById(id);
        if (!task) {
            throw new NotFoundException("Task not found");
        }
       return task;
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.taskService.createTask(createTaskDto)
    }

    @Patch('/:id/:status')
    updateTask(@Param('id') id: string, @Param('status') status: TaskStatus): Task{

        const updatedTask: Task = this.taskService.updateTask(id, status);

        if (!updatedTask) {
            throw new NotFoundException('Something went wrong');
        }
        return updatedTask;
    }


    @Delete('/:id')
    deleteTaskById(@Param('id') id: string) {
        this.taskService.deleteTaskById(id)
    }

}
