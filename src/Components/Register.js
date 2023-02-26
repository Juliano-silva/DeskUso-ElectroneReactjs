import React, { Component } from 'react'
import style from './Style.module.css'
class Welcome extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const image = e.target.elements.image.value;
    localStorage.setItem('@welcome-app/username', username);
    localStorage.setItem('@welcome-app/image', image);
    window.location.reload();
  }

  handleLogout = () => {
    localStorage.removeItem('@welcome-app/username');
    localStorage.removeItem('@welcome-app/image');
    window.location.reload();
  }

  render() {
    const username = localStorage.getItem('@welcome-app/username');
    const image = localStorage.getItem('@welcome-app/image');
    if (username !== null,image !== null) {
      return (
        <div className={style.Login}>
          <img src={image} alt="" />
          <h1>Bem-vindo {username}</h1>
          <button onClick={this.handleLogout}>Sair</button>
        </div>
      );
    }
    return (
      <form onSubmit={this.handleSubmit} className={style.FormRE}>
        <input type="text" name="username" placeholder="Nome de usuário" required />
        <input type="text" name="image" placeholder="Image do usuário" required />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Welcome;
