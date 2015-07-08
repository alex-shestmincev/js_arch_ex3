

var StudentList = React.createClass({

  getInitialState: function() {
    return {
      users: []
    }
  },

  componentWillMount(){
    Actions.getStudentList(this.loaded);
  },

  componentDidMount: function(){

  },

  loaded: function(data){
    this.setState({
      users: data
    })
  },

  changeStatus: function(user,status){
    user.status = status;
    var self = this;
    Actions.updateStudent(user, function(){
      Actions.getStudentList(self.loaded);
    })
  },

  render: function() {

    var items =[];

    for (var i=0;i<this.state.users.length;i++){
      items.push(
        <StudentListItem changeStatus={this.changeStatus} user={this.state.users[i]} />
      );
    }

    return (
      <div className="StudentList">
        {items}
      </div>
    );
  }
});

React.render(
  <StudentList />,
  document.getElementById('content')
);