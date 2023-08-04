import {Injectable} from '@angular/core';

@Injectable({
    providedIn:"root",
})

export class TodolistService{
    private tasks:string[]=[];

    addTask(task:string):void{
        console.log(task)
        this.tasks.push(task)
    }

    getTasks():string[]{
        return this.tasks
    }

    deleteTask(index:number):void{
        this.tasks.splice(index,1)
    }

    editTask(index: number, updatedTask: string): void {
        if (index >= 0 && index < this.tasks.length) {
          this.tasks[index] = updatedTask;
        }
      }
}