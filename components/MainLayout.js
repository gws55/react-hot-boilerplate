import React from 'react';
import Header from './Header';
import s from './MainLayout.css';

class MainLayout extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref="root">
        <div className="mdl-layout__inner-container">
          <Header />
          <main className={s.content} >
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

export default MainLayout;
