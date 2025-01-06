import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Patch,
    Post,
    Query, UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import { Task, TaskStatus } from './task.model';
import {CreateTaskDto} from "./dto/create-task.dto";
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {
    }


    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto):  Task[]  {
        let tasks: Task[];
        if (Object.keys(filterDto).length) {
            tasks = this.taskService.getTaskWithFilters(filterDto);
        } else {
            tasks = this.taskService.getAllTasks();
        }

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
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.taskService.createTask(createTaskDto)
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id: string, @Body('status') status: TaskStatus): Task{

        const updatedTask: Task = this.taskService.updateTaskStatus(id, status);

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
