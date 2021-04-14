import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../App.css";
import api from "../utils/api.util";
import Classifieds from "./classifieds/Classifieds";

class Main extends Component {
  state = {
    // users: [],
    // neighborhood: '',
    email: "",
    username: "",
    name: "",
    cep: "",
    street: "",
    neighborhood: "",
    city: "",
    imgURL: "",
    score: "",
    userid: localStorage.getItem("user"),
    search: "",
  };

  loadUser = async () => {
    const id = this.state.userid;
    const user = await api.getUsersDetails({ id });
    this.setState({
      email: user.email,
      username: user.username,
      name: user.name,
      cep: user.cep,
      street: user.street,
      neighborhood: user.neighborhood,
      city: user.city,
      imgURL: user.imgURL,
      score: user.score,
    });
  };

  componentDidMount = async () => {
   await this.loadUser();
  };

  render() {
    return (
      <>
        <section id="main-page">
          <div className="main">
            TAMO NA MAIN
            <div className="user-main">
              Bem Vindo {this.state.name} !<br></br>
              {this.state.imgURL}
              <br></br>
              {this.state.username}
              <p>
                <b>{this.state.neighborhood}</b>
              </p>
              Seu CEP: {this.state.cep} - {this.state.street}.
              <p>Seu Score: {this.state.score}</p>
              <button>
                {" "}
                <Link to={`/users/useredit/${this.state.userid}`}>
                  Edit
                </Link>{" "}
              </button>
            </div>
            <div className="">
              <form>
                <input
                  name="search"
                  type="text"
                  value={this.state.search}
                  onChange={this.handleInput}
                />
                <button type="submit" onClick={this.handleSubmit}>
                  Buscar
                </button>
              </form>
              <button Link to="/search">
                Busca Avançada
              </button>
              <p></p>
            </div>
            <Classifieds userNeighborhood={this.state.neighborhood} />
          </div>
        </section>

        <p></p>
        <section id="comofunciona">
          <div className="flex2">
            <p className=""></p>
            <img width="10%" src="/images/produtos.jpeg" alt="produtos" />
            <br></br>Produtos
            <p className=""></p>
            <img width="10%" src="/images/servicos.jpeg" alt="servicos" />
            <br></br>Serviços
            <p className=""></p>
            <img width="10%" src="/images/projetos.jpeg" alt="projetos" />
            <br></br>Projetos
          </div>
        </section>
      </>
    );
  }
}

export default Main;
