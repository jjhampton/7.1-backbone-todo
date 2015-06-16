import TasksListView from './views/tasksListView';
import CreateTaskView from './views/createTaskView';
import {TasksCollection} from './models/taskModel';

(function(){
  'use strict';

  $(document).ready(function(){

    $('#header').append(new CreateTaskView().el);

    var tasksCollection = new TasksCollection();

    tasksCollection.fetch().then(function() {
      var tasksListView = new TasksListView({
        collection: tasksCollection
      });
      $('#main').prepend(tasksListView.el);
    });
  });
})();
