# To-Do List

This is a simple To-Do List application built with React.

## Features

- Add tasks
- Remove tasks
- Mark tasks as completed
- Filter tasks (All, Active, Completed)
- Persist tasks in localStorage

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/todo-list.git
    cd todo-list
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage

- Enter a task in the input field and click "Add Task" to add a new task.
- Click "Toggle" to mark a task as completed or not completed.
- Click "Remove" to delete a task.
- Use the filter buttons to view all tasks, only active tasks, or only completed tasks.

## Testing

To test the application:

1. **Add Tasks**: Enter a task in the input field and click "Add Task". Verify that the task appears in the list.
2. **Mark as Completed**: Click the "Toggle" button on a task to mark it as completed. Verify that the task's text is styled with a line-through.
3. **Remove Task**: Click the "Remove" button on a task. Verify that the task is removed from the list.
4. **Filter Tasks**: Use the "All", "Active", and "Completed" buttons to filter the tasks. Verify that the task list displays the correct tasks based on the filter.
5. **Persistence**: Refresh the page and verify that the tasks persist in localStorage.

## License

This project is licensed under the MIT License.
