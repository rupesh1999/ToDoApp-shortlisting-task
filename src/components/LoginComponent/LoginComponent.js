import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import styles from "./LoginComponent.module.css";

class LoginComponent extends Component {
    componentDidMount = () => {
        let users={
            users: [{
                email: "abcd@gmail.com",
                password: "abcd"
            },
            {
                email: "abcd@yahoo.com",
                password: "abcd"
            },
            {
                email: "abcd@xyz.com",
                password: "abcd"
            }]
        }
        window.localStorage.setItem("users" , JSON.stringify(users));
    }

    state = {
        email: "",
        password: "",
        error: false
    }
    emailOnChangeHandeler = (e) => {
        this.setState({ email: e.target.value })
        // console.log(window.localStorage.getItem("users"));
    }
    passwordOnChangeHandeler = (e) => {
        this.setState({ password: e.target.value })
    }
    clickHandeler = () => {
        let users = JSON.parse(window.localStorage.getItem("users"));
        
        users.users.map(el => {
            if(el.email == this.state.email && el.password == this.state.password){
                this.props.login();
            }else{
                this.setState({"error" : true});
            }
        })

    }
    createError = () => {
        if(this.state.error === true){
            return <p class={styles.danger}>Email or Password you entered was incorrect</p>
        }
    }

    
    render() {
        return (
            <div align="center" className={styles.hero}>
                <div className={styles.style}>
                    <form className={styles.formstyle}>
                        <h2>Login</h2>
                        {this.createError()}
                        <FormControl>
                            <TextField
                                label="Email"
                                margin="normal"
                                fullWidth
                                onChange={this.emailOnChangeHandeler}
                            />
                            <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
                        </FormControl>
                        <br />
                        <FormControl>
                            <TextField
                                label="password"
                                className={styles.TextFieldStyle} type="password"
                                margin="normal"
                                fullWidth
                                onChange={this.passwordOnChangeHandeler}
                            />
                        </FormControl>
                        <br /><br />

                        <Button variant="contained" size="medium" color="primary" onClick={this.clickHandeler} id={styles.btn}>
                            Login
                            </Button>
                    </form>
                </div>
            </div>
        )
    }
}


export default LoginComponent;
