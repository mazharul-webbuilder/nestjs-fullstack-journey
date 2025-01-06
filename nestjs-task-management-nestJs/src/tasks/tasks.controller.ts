import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {Task} from "./task.model";
import {CreateTaskDto} from "./dto/create-task.dto";
import {json} from "express";
import * as http from "node:http";

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


    @Delete('/:id')
    deleteTaskById(@Param('id') id: string) {
        const deletedTask =  this.taskService.deleteTaskById(id)
        if (deletedTask) {
            return ({
                'message': 'Task Deleted Successful',
                deletedTask
            })
        }
    }

}
