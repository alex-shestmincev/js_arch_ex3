(function () {

  var dispatcher = new Dispatcher();
  var studentStore = new StudentsStorage();

  var Actions = {
    getStudentList: function(callback){
      dispatcher.on("student:listLoadSaved",callback);
      dispatcher.on("student:getList",function(){
        studentStore.load();
      });
      dispatcher.fire("student:getList");
    },
    updateStudent: function(student, callback){
      dispatcher.on("student:save",function(student){
        student.save(callback);
      });
      dispatcher.fire("student:save",student);
    }
  };



  window.Actions = Actions;
})();