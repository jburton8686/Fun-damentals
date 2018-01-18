/*
1. Create a new array of task names that will take longer 60 minutes. Console log out that array.

2. Calcuate the total number of minutes needed to complete all the tasks that will take 60 minutes or less. This should return a single number. 

3. Before we actuall starting knocking these tasks out, we probablly need a completed bool, so we can check them off. Add a completed property to each task, and set it to false and return a new array. 

Try to complete them without using a for loop. Maybe check Map, Filter, & Reduce. 
*/

const tasks = [
    {
      'name'     : 'Laundry',
      'duration' : 45
    },
   {
      'name'     : 'Food Shopping',
      'duration' : 35
    },
   {
      'name'     : 'Homework',
      'duration' : 120
    },
   
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on LMS',
      'duration' : 120
    },
    {
      'name'     : 'Netflix',
      'duration' : 240
    }
  ];
  Object.freeze(tasks);
//  console.log(tasks);
// var difficultTask = task.filter(function(task){
//   return.task.duration > 60;
// }).map(function(task){
//   return task.name;
// });
// console.log(difficultTask);
// const newTask = {'Completed'};
// const newArray = appendObjTo(task, newTask);
// function appendObjTo(thatArray, 'Completed'); {
//  return Object.freeze(tasks.concat(objToAppend));
//}

// const longTask = tasks.reduce(tasks.duration > 60);
// console.log(longtask);
  var allEasyTaskTime = tasks.filter(function(task){
    return task.duration <= 60;
  }).map(function(task){
    return task.duration
  }).reduce(function(sum, time){
    return sum = sum + time;
  }, 0);
  
  let esEasy = 
  tasks.filter(x => x.duration<=60)
  .map(o=>o.duration)
  .reduce((sum,time) => sum+=time,0);
  
  console.log(allEasyTaskTime);

let toBeCompleted = tasks.map(function(task){
  task.completed = false;
  return task;
})
//return {
//  ...task,         Another way to add an object to an array also modifies the original array
//  completed:false   3 dots are a spread operator
//}
//return [
//   ...toBeCompleted.slice(0, taskIndex),
//   {
//     ...toBeCompleted[taskIndex],      fixes the original array from the above modification
//     completed: true
//   },
//   ...toBeCompleted.slice(taskIndex+1, toBeCompleted.length);
// ]
// }

console.log(toBeCompleted);
  /*
Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.
*/

//NO LOOPS

function logging(n){
  console.log("running operation...... " + n);
}

function repeat(operation, num) {
      // SOLUTION GOES HERE
      function multiply() {


      }
    }


//should call function logging 5 times
repeat(logging, 5);