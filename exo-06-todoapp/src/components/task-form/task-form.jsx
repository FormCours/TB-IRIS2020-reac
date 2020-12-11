import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';

import PriorityEnum from './../../enums/priority-enum';

import style from './task-form.module.css';

class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            desc: '', 
            priority: PriorityEnum.NORMAL
        }
    }

    handleInput = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, desc, priority} = this.state;

        // Envoie des données
        const task = {
            id: nanoid(),
            name: name,
            desc: desc,
            priority: priority,
            isFinish: false
        }
        this.props.onNewTask(task);

        // Reset du formulaire
        this.setState({
            name: '',
            desc: '',
            priority: PriorityEnum.NORMAL,
        })
    }

    render() {
        const {name, desc, priority} = this.state;

        return (
            <form className={style.taskForm} onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input id="name" type="text" 
                        name="name" value={name} onChange={this.handleInput}/>
                </div>
                <div>
                    <label htmlFor="desc">Description</label>
                    <textarea id="desc" 
                        name="desc" value={desc} onChange={this.handleInput}/>
                </div>
                <div>
                    <label htmlFor="priority">Priorité</label>
                    <select id="priority" 
                        name="priority" value={priority} onChange={this.handleInput}>
                        <option value={PriorityEnum.NORMAL}>Normal</option>
                        <option value={PriorityEnum.HIGH}>Urgent</option>
                        <option value={PriorityEnum.LOW}>Basse</option>
                    </select>
                    <input type="submit" value="Ajouter" />
                </div>
            </form>
        )
    }
}

TaskForm.propTypes = {
    onNewTask: PropTypes.func.isRequired
}


export default TaskForm;