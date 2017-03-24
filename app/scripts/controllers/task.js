'use strict';

/**
 * @ngdoc function
 * @name toDoAppApp.controller:TaskController
 * @description
 * # TaskController
 * Controller of the toDoAppApp
 */
var app=angular.module('toDoAppApp')
  app.controller("TaskController", function($scope) {
      console.log("In TaskController")
  //Array From Which Table is created
    $scope.array = [ 
        { 'id':'0', 'date': '19/03/2014', 'task': 'To Migration MongoDB To Mysql' },
         { 'id': '1', 'date': '20/03/2014', 'task': 'To Migration MongoDB To Mysql' },
          { 'id': '2', 'date': '21/03/2014', 'task': 'To Migration MongoDB To Mysql' },
           { 'id': '3', 'date': '22/03/2014', 'task': 'To Migration MongoDB To Mysql' }
    ];
  //To show array in list format & hide AddForm, EditForm  
    $scope.showList = true;
    $scope.showAddForm=false;
    $scope.showEdit=false;

  //function to show add new task form
  $scope.showAdd=function(){
      console.log("in showAddForm");
            $scope.showList = false;
            $scope.showEdit=false;
            $scope.showAddForm=true;
   }
   //function to add new task in array & display array in table format
    $scope.saveTask =function(){
        var id=$scope.array.length;
        $scope.array.push({'id':id,'date':$scope.newtask.date,'task':$scope.newtask.task});
        $scope.showList=true;
        $scope.showAddForm=false;
        $scope.newtask = {};
       
    }
   
     //function to delete task from array
     $scope.delete = function(id) {
        for(var i in $scope.array) {
            if($scope.array[i].id == id) {
                $scope.array.splice(i,1);
            }
        }
    }
    //function to display edit form 
    $scope.edit = function(id) {
      console.log("in EditForm")
         $scope.showList = false;
          $scope.showEdit = true;
         for(var i in $scope.array) {
            if($scope.array[i].id == id) {
                 $scope.a=i;
            $scope.date=$scope.array[i].date;
            $scope.task=$scope.array[i].task;
           }
        }
    }

//    //function to update array & show in table format
    $scope.updateTask=function(){
             $scope.array[$scope.a].date=$scope.date;
             $scope.array[$scope.a].task=$scope.task;
             $scope.showEdit=false;
             $scope.showList=true;
          }
  });
