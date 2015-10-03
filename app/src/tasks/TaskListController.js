(function(){
  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */




  var agiledo = angular.module('tasks');
  agiledo.controller('TaskListController', [
          'taskService',
          function ( taskService ) {
            var self = this;
            self.tasks = [];

            function loadTasks() {
              self.tasks = taskService.getTasks();
            }
            loadTasks();
          }
       ]);

})();
