function TodoController ($scope) {

	$scope.saved = localStorage.getItem('todos');
	$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
	localStorage.setItem('todos', JSON.stringify($scope.todos));

	//function adding plan
	$scope.addTodo = function() {
		$scope.todos.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};

	//function calculate how many remaining
	$scope.remaining = function() {
		var remain = 0;
		angular.forEach($scope.todos, function(todo){
			remain+= todo.done ? 0 : 1;
		});
		return remain;
	};

	//function deleting
	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo){
			if (!todo.done)
				$scope.todos.push(todo);
		});
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};
}