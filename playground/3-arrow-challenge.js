//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo: function() {
                    const tasksToDo = this.tasks.filter(function (pendingTask){
                        //console.log('Inside tasks.filter iteration, pendingTask.text = ' + pendingTask.text); 
                        //console.log(' and pendingTask.completed = ' + pendingTask.completed);                           
                        return (pendingTask.completed === false)
                    })

                    return tasksToDo;
    }
}

console.log(tasks.getTasksToDo())