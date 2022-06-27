import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input data-testid="name-input" type="text" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea data-testid="description-input" cols="30" rows="10" />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input data-testid="image-input" type="text" />
        </label>
        <label htmlFor="rare-input">
          <select data-testid="rare-input">
            Raridade
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input data-testid="trunfo-input" type="checkbox" />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
