import React from 'react';
import ConfirmDialog from '../../Dialogs/ConfirmDialog'

class FruitTable extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeAllRegistered();
  }

  updateFruit() {
    alert('update');
  }

  deleteFruit() {
    alert('delete');
  }

  render() {
    var self = this;

    var rows = this.props.fruits.map(function(fruit) {
      return (
        <tr key={fruit.id}>
          <td className="mdl-data-table__cell--non-numeric">{fruit.id}</td>
          <td>{fruit.name}</td>
          <td>{fruit.create_date}</td>
          <td>{fruit.update_date}</td>
          <td>
            <button className='mdl-button mdl-button--mini-fab' onClick={self.updateFruit}>update</button>
            <button className='mdl-button mdl-button--mini-fab' onClick={self.deleteFruit}>delete</button>
          </td>
        </tr>
      )
    });

    return (
      <div>
        <table className="mdl-data-table mdl-js-data-table">
          <tbody>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">id</th>
              <th>name</th>
              <th>create date</th>
              <th>update date</th>
              <th>actions</th>
            </tr>
            {rows}
          </tbody>
        </table>
        <ConfirmDialog />
      </div>
    )
  }
}

export default FruitTable;
