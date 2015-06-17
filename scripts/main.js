import TasksListView from './views/tasksListView';
import CreateTaskView from './views/createTaskView';
import TasksCompleteCounterView from './views/tasksCompleteCounterView';
import {TasksCollection} from './models/taskModel';

(function(){
  'use strict';

  $(document).ready(function(){

    var tasksCollection = new TasksCollection();

    var createTaskView = new CreateTaskView({
      collection: tasksCollection
    });

    $('#header').append(createTaskView.el);



    tasksCollection.fetch().then(function() {
      var tasksListView = new TasksListView({
        collection: tasksCollection
      });
      $('#main').prepend(tasksListView.el);

      var tasksCompleteCounterView = new TasksCompleteCounterView({
        collection: tasksCollection
      });
      $('.footer').append(tasksCompleteCounterView.el);

    });
  });
})();
