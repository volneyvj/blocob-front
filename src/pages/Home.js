import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Login from './Login';
import SignUp from './SignUpShort';

class Home extends Component {
  render() {
    return (
      <div>
        <section id="login-signup">
          <div className="home-login">


            {/* login */}


            <div className="">
              <p className=""></p>
                <Login {...this.props}/>
            </div>

            {/* signup */}

            <div className="">
              <p className=""></p>
                <SignUp handleLogin = { this.props.handleLogin } history = { this.props.history }/>
            </div>

          </div>

        </section>


        <section id="main">
          <div className="flex">
            <p className=""></p>
              Anuncie seu produto, serviço ou um projeto social no seu bairro.
<br></br>Os usuários somente podem interagir com moradores do mesmo bairro.
            <p className=""></p>
              <img width="30%" src="/images/bairro-desenho1.jpeg" alt="bairro" />
          </div>
        </section>

        <section id="main2">
          <div className="flex">
            <p className=""></p>
              <img width="30%" src="/images/bairro-desenho2.jpeg" alt="bairro2" />

            <p className=""></p>
              <b>Seu Bairro mais Desenvolvido </b>
              <br></br>
Dessa forma você colabora com seus vizinhos,
<br></br>facilitando o contato, entrega e melhorando seu perimetro urbano.
<br></br><button>Explore +</button>
            
          </div>
        </section>

        <section id="comofunciona">
          <div className="flex2">
            <p className=""></p>
              <img width="20%" src="/images/produtos.jpeg" alt="produtos" />
              <br></br>Produtos

            <p className=""></p>
              <img width="20%" src="/images/servicos.jpeg" alt="servicos" />
              <br></br>Serviços
            <p className=""></p>
              <img width="20%" src="/images/projetos.jpeg" alt="projetos" />
              <br></br>Projetos

          </div>
        </section>

      </div>

    )
  }

}

export default Home
