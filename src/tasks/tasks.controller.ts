import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(): Task[] {
        return this.taskService.getTasks();
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId: string) {
        return this.taskService.getTask(parseInt(taskId));
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        return 'Creating done'
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        return `Deleting a task number ${id}`
    }

    @Put(':id')
    updateTask(@Body() task:CreateTaskDto, @Param('id') id): string {
        return `Updating a task number ${id}`
    }

} 
