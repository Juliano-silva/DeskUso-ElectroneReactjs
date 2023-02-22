import React, { Component } from 'react'

class Welcome extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    localStorage.setItem('@welcome-app/username', username);
    window.location.reload();
  }

  handleLogout = () => {
    localStorage.removeItem('@welcome-app/username');
    window.location.reload();
  }

  render() {
    const username = localStorage.getItem('@welcome-app/username');
    if (username !== null) {
      return (
        <div>
          <p>Bem vindo {username}</p>
          <button onClick={this.handleLogout}>Sair</button>
        </div>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="Nome de usuário" required />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Welcome;
