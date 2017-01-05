var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should Exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {

    it('Should set valid todos array', () => {

      var todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      // Use toEqual() when comparing objects and arrays
      expect(actualTodos).toEqual(todos);
    });

    it('Should not set an  invalid todos array', () => {
      var badTodos = {a: 'b'};

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });


  });

  describe('getTodos', () => {
    it('Should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('Should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
});
