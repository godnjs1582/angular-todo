import { Component, OnInit } from "@angular/core";
import { TodolistService } from "./todolist.service";

@Component({
    selector:"app-todolist",
    templateUrl:"./todolist.component.html",
    styleUrls:['./todolist.component.css']
})

export class TodolistComponent implements OnInit{
    newTask:string="";
    tasks:string[]=[];
    editIndex: number | null = null;
    editedTask: string = '';

    constructor(private todoService:TodolistService){}

    ngOnInit(): void {
        console.log(this.newTask)
        this.tasks =this.todoService.getTasks();
    }

    addTask():void{
        console.log(this.newTask)
        if(this.newTask.trim()!==""){
            this.todoService.addTask(this.newTask);
            this.tasks = [...this.todoService.getTasks()];
         
            this.newTask="";
        }
    }

    deleteTask(index:number):void{
        this.todoService.deleteTask(index);
        this.tasks=this.todoService.getTasks();
    }



startEditing(index: number, task: string): void {
  this.editIndex = index;
  this.editedTask = task;
}

cancelEditing(): void {
  this.editIndex = null;
  this.editedTask = '';
}

saveTask(): void {
  if (this.editIndex !== null && this.editedTask.trim() !== '') {
    this.todoService.editTask(this.editIndex, this.editedTask);
    this.tasks = [...this.todoService.getTasks()];
    this.cancelEditing();
  }
}
}