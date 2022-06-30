import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            data-testid="name-input"
            type="text"
            onChange={ onInputChange }
            id="cardName"
            value={ cardName }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            cols="30"
            rows="10"
            onChange={ onInputChange }
            id="cardDescription"
            value={ cardDescription }
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            onChange={ onInputChange }
            id="cardAttr1"
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            onChange={ onInputChange }
            id="cardAttr2"
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            onChange={ onInputChange }
            id="cardAttr3"
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            onChange={ onInputChange }
            id="cardImage"
            value={ cardImage }
          />
        </label>
        <label htmlFor="rare-input">
          <select
            data-testid="rare-input"
            id="cardRare"
            onChange={ onInputChange }
            value={ cardRare }
          >
            Raridade
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
            data-testid="trunfo-input"
            type="checkbox"
            onChange={ onInputChange }
            id="cardTrunfo"
            checked={ cardTrunfo }
          />}
        </label>
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
