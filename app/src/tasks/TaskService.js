(function(){
  'use strict';

  angular.module('tasks').service('taskService', [TaskService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function TaskService(){

    var taskList = [];


    /**

    for our purpose: context = labels
{
  name:string,
  dueDate:string,
  prio:string,
  project:[string],
  context:[],
}
     */
    function createTask(task) {
        taskList.push(task);
    }

    function demo() {
      createTask({
        name:"Hello World",
        prio:"A",
        context:["phone","work"],
      });
      createTask({
        name:"Hello World2",
        prio:"A",
        context:["phone","work"],
      });
      createTask({
        name:"Hello World3",
        prio:"B",
        context:["phone","private"],
      });
      createTask({
        name:"Hello World",
        prio:"C",
        context:["email","work"],
      });

    }
    demo();

    // Promise-based API
    return {
      getTasks : function() {
        // Simulate async nature of real remote calls
        return taskList;
      },
      getTasksWithFilters : function ( filters ) {

      },
    };
  }

})();
