var React = require('react');

var AddTodo = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();

    var todo = this.refs.todo.value;
    if (todo.length > 0) {
      this.refs.todo.value = '';
      this.props.onAddTodo(todo);
    } else {
      // If the test is invalid the cursor moves back to input field with .focus();
      this.refs.todo.focus();
    }
  },

  render: function () {
    return (
      <div>
        <form ref='form' onSubmit={this.handleSubmit}>
          <input type='text' ref='todo' placeholder='What do you need to do?' autoFocus='autoFocus'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    );
  }


});

module.exports = AddTodo;
