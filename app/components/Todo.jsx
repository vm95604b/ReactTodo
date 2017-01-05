var React = require('react');
var Moment = require('moment');

var Todo = React.createClass({
  render: function () {
    var {text, completed, id, createdAt, completedAt} = this.props;

    var renderDate = () => {
      var message = 'Created';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + Moment.unix(timestamp).format(' MMM Do YYYY @ h:mm a')
    };

    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type='checkbox' checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
