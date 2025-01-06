import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
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
    getAllTasks(): Task[] {
        return this.taskService.getAllTasks()
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.taskService.getTaskById(id);
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
