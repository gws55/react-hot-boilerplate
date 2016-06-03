import React from 'react';

class FruitCreator extends React.Component {

  componentDidMount() {
    this.fruitDialog = document.getElementById('fruitDialog');
    window.componentHandler.upgradeAllRegistered();
  }

  openDialog() {
    this.fruitDialog.show();
  }

  closeDialog() {
    this.fruitDialog.close();
  }

  create() {
    this.fruitDialog.close();
  }

  render() {
    return (
      <div>
        <button className='mdl-button mdl-button--mini-fab' onClick={this.openDialog.bind(this)}>create</button>
        <dialog id='fruitDialog' className="mdl-dialog">
          <div className="mdl-dialog__title">Create Fruit</div>
          <div className="mdl-dialog__content">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="id" pattern="[A-Z,a-z, ]*"></input>
              <label className="mdl-textfield__label" htmlFor="id">Name</label>
              <span className="mdl-textfield__error">Letters and spaces only</span>
            </div>
          </div>
          <div className="mdl-dialog__actions">
            <button type="button" className="mdl-button" onClick={this.closeDialog.bind(this)}>Ok</button>
            <button type="button" className="mdl-button close" onClick={this.closeDialog.bind(this)}>Cancel</button>
          </div>
        </dialog>
      </div>
    )
  }
}

export default FruitCreator;
