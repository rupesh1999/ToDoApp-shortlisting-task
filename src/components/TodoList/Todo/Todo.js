import React, { Component } from "react";
import classes from "./Todo.module.css";
import Button from '@material-ui/core/Button';

class Todo extends Component {
    state = {
        showDetails: false,
    }
    partialView = () => {
        console.log(this.props.singleTodo);
        if (!this.state.showDetails) {
            if (this.props.singleTodo.status === 0) {
                return (
                    <div style={{ margin: "0 auto", textAlign: "left" }} className={classes.todoContainerComp} id={classes.todo}>
                        <p className={classes.heading} onClick={() => { this.setState({ showDetails: true }) }} style={{ marginLeft: "40px", marginBottom: "0px" }}>{this.props.id + 1}. {this.props.singleTodo.todo}</p>
                        <div style={{display: "flex" , alignItems: "center" , marginRight: "15px;"}}>
                            <p style={{ marginBottom: "0px"}}>Task Compleated</p>
                            <Button variant="outlined" className={classes.btn} onClick={() => this.props.deleteTodo(this.props.id)}>Delete</Button>
                        </div>
                    </div>
                );
            } else {

                return (
                    <div style={{ margin: "0 auto", textAlign: "left" }} className={classes.todoContainer} id={classes.todo}>
                        <p className={classes.heading} onClick={() => { this.setState({ showDetails: true }) }} style={{ marginLeft: "40px", marginBottom: "0px" }}>{this.props.id + 1}. {this.props.singleTodo.todo}</p>
                        <div>
                            <Button variant="outlined" className={classes.btn} onClick={() => this.props.markDone(this.props.id)} >Mark Done</Button>
                            <Button variant="outlined" className={classes.btn} onClick={() => this.props.deleteTodo(this.props.id)}>Delete</Button>
                        </div>
                    </div>
                );
            }
        } else {
            return (
                <div className={classes.description}>
                    <div style={{marginBottom: "15px"}}>
                        <h2>Title: {this.props.singleTodo.todo}</h2>
                        <br /><br /><br />
                        <h4>Description</h4>
                        <p>{this.props.singleTodo.todoDescription}</p>
                        <Button  variant="outlined" onClick={() => { this.setState({ showDetails: false }) }}>Go Back</Button>
                    </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div style={{marginTop: "15px"}}>
                {this.partialView()}
            </div>
        );
    }
}

export default Todo;