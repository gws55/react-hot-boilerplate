import React from 'react';

class ConfirmDialog extends React.Component {

  componentDidMount() {
    this.dialog = document.getElementById('dialog');
    window.componentHandler.upgradeAllRegistered();
  }

  openDialog() {
    this.dialog.show();
  }

  closeDialog() {
    this.dialog.close();
  }

  render() {
    return (
      <dialog id='dialog' className="mdl-dialog">
        <div className="mdl-dialog__content">
          Are you sure you want to delete?
        </div>
        <div className="mdl-dialog__actions">
          <button type="button" className="mdl-button" onClick={this.closeDialog.bind(this)}>Yes</button>
          <button type="button" className="mdl-button close" onClick={this.closeDialog.bind(this)}>Cancel</button>
        </div>
      </dialog>
    )
  }
}

export default ConfirmDialog;
