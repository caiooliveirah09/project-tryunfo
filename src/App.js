import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = async ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.id]: value },
      () => this.setState({ isSaveButtonDisabled: this.validateForms() }));
  }

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
  }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled } = this.state;

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
      </div>
    );
  }
}

export default App;
