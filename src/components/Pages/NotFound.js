import React from 'react';
import img404 from '../../static/404.png'

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <br />
        <img src={img404} />
      </div>
    );
  }
}

export default NotFound;
