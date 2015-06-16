import TasksListView from './views/tasksListView';

import {TasksCollection} from './models/taskModel';

(function(){
  'use strict';

  $(document).ready(function(){

    var tasksCollection = new TasksCollection();

    tasksCollection.fetch().then(function() {
      var tasksListView = new TasksListView({
        collection: tasksCollection
      });
      $('#main').prepend(tasksListView.el);
    });
  });
})();
