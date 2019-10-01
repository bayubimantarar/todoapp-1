describe("Testing the function", function() {
  it("should be add an todo", function() {
    var toDo = new addToDo();
    var item = {
      value: 'Get some milk'
    }
    addToDo(item);
    expect(getToDo().length).toBe(1);
  });
  it("should be delete an todo", function(){
    var toDo = new addToDo();
    var item = {
      value: 'Get some milk'
    }
    addToDo(item);
    deleteToDo(item);
    expect(getToDo().length).toBe(0);
  })
});

function addToDo(item) {
  this.toDo = [];
  this.toDo.push(item)
}

function getToDo() {
  return this.toDo;
}

function deleteToDo(item) {
  this.toDo.splice(item);
}
