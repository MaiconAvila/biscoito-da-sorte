import React, { Component } from 'react';
import styled from 'styled-components';
import biscoitoDaSorte from './BiscoitoSorte.jpg';
import wIcon from './wIcon.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Generator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1% 5%;
  max-width: 600px;
  width: 600px;
  height: 60vh;
  background: #EDBA35;
  border-radius: 5px;
  box-shadow: 0px 0px 74px -22px black;

  img {
    width: 150px;
    border-radius: 5px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: #2C2D31;
    background: #fff;
    width: 60%;
    height: 3rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 5px 5px #73590F;

    img {
      width: 30px;
      margin-right: .5rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: #2C2D31;
    text-align: center;
    height: 3rem;
  }

  @media (max-width: 490px) {
    height: 70vh;
    padding: 2rem 1rem;
    width: 80%;
  }
`;

class App extends Component {
  state = {
    luck: [
      'Não dê atenção às palavras vãs de más línguas.',
      'Seja orgulhoso, porém tolerante e generoso.',
      'Uma boa época para terminar tarefas antigas.',
      'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
      'Quando a coceira é dentro da bota, coçar o lado de fora não alivia muito.',
      'Más companhias são como um mercado de peixes: acaba-se acostumando com o mal cheiro.',
      'O cordeiro ajoelha-se para mamar.',
      'As pessoas acham difícil resistir ao seu jeito persuasivo de ser.',
      'Se o braço estiver quebrado, mantenha-o sob a manga.',
      'Você terá sorte em muitas coisas.',
    ],
    luckShow: ''
  }

  componentDidMount() {
    this.handleGenerator()
  }

  handleGenerator = () => {
    const randomItem = this.state.luck[Math.floor(Math.random()*this.state.luck.length)];
    // this.randomItem = this.state.luck[1];
    // console.log(Math.floor(Math.random()*this.state.luck.length))

    this.setState({
      luckShow: randomItem,
    })
  }

  share = () => {
    const mensage = this.state.luckShow;
    window.open(`https://web.whatsapp.com/send?text=${mensage}`)
  }
  
  render() {
    return (
      <Container>
      <Generator>
        <img src={biscoitoDaSorte} alt="Biscoito da Sorte" />
        <button
          type="button"
          onClick={this.handleGenerator}
          >Abrir o biscoito</button>

          <button onClick={this.share}><img src={wIcon} alt="Icone do WhatsApp" />Compartilhar</button>

        <p>{this.state.luckShow}</p>
      </Generator>
      </Container>
    );
  }
}

export default App;
