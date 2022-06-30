import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardsInfo: [],
    };
  }

  onInputChange = async ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.id]: value },
      () => this.setState({ isSaveButtonDisabled: this.validateForms() }));
  }

  // Esse código de baixo funciona, mas não passa nos testes do jest :/
  // setStateAsync = (state) => new Promise((resolve) => { this.setState(state, resolve); })

  validateForms = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, // cardTrunfo, hasTrunfo,
      /* isSaveButtonDisabled */ } = this.state;

    const sum = Number(parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10));

    const sumMax = 210;
    const AttrMin = 0;
    const AttrMax = 90;

    if (cardName.length > 0
      && cardImage.length > 0
      && cardDescription.length > 0
      && Number(cardAttr1) <= AttrMax && Number(cardAttr1) >= AttrMin
      && Number(cardAttr2) <= AttrMax && Number(cardAttr2) >= AttrMin
      && Number(cardAttr3) <= AttrMax && Number(cardAttr3) >= AttrMin
      && sum <= sumMax
      && cardRare.length > 0) {
      return false;
    }
    return true;
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, cardsInfo } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.setState({
      cardsInfo: [...cardsInfo, card],
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, cardsInfo } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <h1>Pré-Visualização</h1>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <h1>Todas as cartas</h1>
        {cardsInfo.map((card) => (<Card
          cardName={ card.cardName }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardImage={ card.cardImage }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
          key={ cardName }
        />))}
      </div>
    );
  }
}

export default App;
