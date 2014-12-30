/*
*	Dummy collection placeholder
*/
define([  
  '../models/ProjectModel'
], function(ProjectModel){

  var ProjectCollection = Backbone.Collection.extend({
    model: ProjectModel
  });

  return ProjectCollection;
});