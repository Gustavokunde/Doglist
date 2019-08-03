import withStyles from '@material-ui/core/styles/withStyles';
import React, { Component } from 'react';

// core components
import classNames from 'classnames';
import Parallax from './assets/material-kit-react/Parallax';
import background from './assets/img/banner.png';
import SearchAndList from './components/SearchAndList';
import PageStyle from './assets/material-kit-react/PageStyle';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
      <Parallax image={background} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SearchAndList />
        </div>
        <footer className="p-4">
          Criado por Gustavo Kunde
          <br />
          Material Gráfico baseado no "Material Kit React" de Creative-tim
        </footer>
      </>
    );
  }
}

export default withStyles(PageStyle)(App);
