var StudentList = React.createClass({

  getInitialState: function() {
    return {
      users: [
        {name: 'Alex', phone: '1111111', status:'redcard'},
        {name: 'David', phone: '2222222',status:'redcard'},
        {name: 'Frank', phone: '3333333', status:'removed'},
        {name: 'John', phone: '111144444111', status:'redcard'},
      ]
    }
  },

  componentWillMount(){
    var dispatcher = new Dispatcher();
  },

  changeStatus: function(user,status){
    var users = this.state.users;
    var index = users.indexOf(user);

    users[index].status = status;
    this.setState({
      users:users
    });
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