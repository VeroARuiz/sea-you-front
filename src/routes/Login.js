import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.login = this.login.bind(this);
    // this.keyPress = this.keyPress.bind(this);
  }


  // login() {
  //   if (!(this.state.username && this.state.password)) {
  //     this.noti.notiActivate('error', "Los campos de Usuario y Contraseña son obligatorios", "Error");
  //     return;
  //   } else {
  //     ax({
  //       method: 'post',
  //       url: 'login',
  //       data: {
  //         username: this.state.username,
  //         password: this.state.password
  //       },
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //     }).then(response => {
  //       //console.log(response.data.result.data.token);
  //       if (response.data.success === true && response.data.result.data.token) {
  //         console.log(response);
  //         loadingTicsaAction("show");
  //         localStorage.setItem("token", response.data.result.data.token);
  //         localStorage.setItem("id", response.data.result.data.user.id);
  //         localStorage.setItem("user", response.data.result.data.user.username);
  //         localStorage.setItem("modalLogin", false);
  //         this.props.history.push("/");
  //         setTimeout(function () {
  //           loadingTicsaAction("hide");
  //         }, 1000);
  //       } else if (response.data.success === false) {
  //         loadingTicsaAction("hide");
  //         this.noti.notiActivate('error', response.data.error.message, "Error");
  //       } else {
  //         loadingTicsaAction("hide");
  //         console.log("error de servidor, codigo: ");
  //       }
  //     })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }

  render() {
    return (
      <div class="container h-100" >
        <div class="row align-items-start"></div>
        <div class="row h-100 justify-content-center align-items-center">

          <Form class="col-12">
            <h5>Login</h5>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>

            <Button>Submit</Button>
          </Form>
        </div>
        <div class="row align-items-end"></div>


      </div>
    );
  }
}

const container = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
