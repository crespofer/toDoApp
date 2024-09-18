import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-dashboard',
  templateUrl: './to-do-dashboard.component.html',
  styleUrl: './to-do-dashboard.component.css'
})
export class ToDoDashboardComponent {
  // this will hold an array of tasks
  tasks: string[] = []; // making a string setting it to empty for user to put in

  // this will hold the value of the new tasks in the input field
  newTask: string = '';

  // will add the new task to the task array
  addTask()
  {
    // check if new task string is not empty or just spaces
    if(this.newTask.trim()) 
    {
      // if after removing spaces, there is still value then push to array
      this.tasks.push(this.newTask);

      this.newTask = ''; // clear input field
    }
  }

  // Will remove a task
  removeTask(index: number)
  {
    this.tasks.splice(index,1);
  }

}
