import React, { Component } from 'react';
import TaskForm from '../../components/task-form/task-form';
import TaskList from '../../components/task-list/task-list';

class TodoApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taskList: []
        };
    }

    handleNewTask = (task) => {
        this.setState((s) => ({
            taskList: [task, ...s.taskList]
        }));
    }

    handleDeleteTask = (id) => {
        this.setState((s) => ({
            taskList: s.taskList.filter(task => task.id !== id)
        }))
    }

    handleFinishTask = (id) => {
        this.setState((s) => ({
            taskList: s.taskList.map(task => (task.id !== id) ? task : {...task, isFinish: true})
        }));
    }

    render() {
        const {taskList} = this.state;

        return (
            <div>
                <h1>Formulaire</h1>
                <TaskForm onNewTask={this.handleNewTask} />

                <h1>La liste des taches</h1>
                <TaskList taskList={taskList} 
                        onDelete={this.handleDeleteTask}
                        onFinish={this.handleFinishTask} />
            </div>
        );
    }
}

export default TodoApp;