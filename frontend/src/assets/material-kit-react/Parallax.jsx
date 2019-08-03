/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import PageStyle from './PageStyle';

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    const windowScrollTop = window.pageYOffset / 3;
    this.state = {
      transform: `translate3d(0,${windowScrollTop}px,0)`,
    };
  }

  componentDidMount() {
    const windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: `translate3d(0,${windowScrollTop}px,0)`,
    });
    window.addEventListener('scroll', this.resetTransform);
  }

  resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: `translate3d(0,${windowScrollTop}px,0)`,
    });
  };

  render() {
    const { classes, className, image } = this.props;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [className]: className !== undefined,
    });
    return (
      <div
        className={parallaxClasses}
        style={{
          backgroundImage: `url(${image})`,
          ...this.state,
        }}
      >
      </div>
    );
  }
}

export default withStyles(PageStyle)(Parallax);
