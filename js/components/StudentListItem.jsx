var StudentListItem = React.createClass({

  redcard: function(){
    this.props.changeStatus(this.props.user, 'redcard');
  },

  remove: function(){
    this.props.changeStatus(this.props.user, 'removed');
  },

  render: function() {

    var act = '';
    var classValue ='StudentListItem';
    if (this.props.user.status === 'redcard'){
      act = (
        <button onClick={this.remove} type="submit">Отчислить</button>
      );
      classValue  += ' redcard';
    }else if(this.props.user.status === 'removed'){
      act = (
        <button onClick={this.redcard} type="submit">Зачислить</button>
      );
      classValue  += ' removed';
    }

    return (
      <ul className={classValue}>
        <li><label>Name:</label> {this.props.user.name}</li>
        <li><label>Phone:</label> {this.props.user.phone}</li>
        {act}
      </ul>
    );
  }
});
