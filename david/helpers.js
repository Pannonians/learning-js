function Todo(title) {
    this.title = title;
    this.complited = false;
}

Todo.prototype.toggle = function() {
    this.complited = !this.complited;
}

module.exports = {
    Todo
}