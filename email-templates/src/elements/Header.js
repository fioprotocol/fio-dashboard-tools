import React from 'react';

import Grid from '../layout/Grid';
import Img from './Img';

const style = {
  header: {
    margin: '0 auto',
    backgroundColor: '#2B2B2E',
    width: '100%',
    WebkitBoxShadow: '0px 6px 28px -3px rgba(0,0,0,0.76)',
    boxShadow: '0px 6px 28px -3px rgba(0,0,0,0.76)',
    color: '#f1f1f1',
  },

  img: {
    height: '36px',
    maxWidth: '74px',
    paddingRight: '40px',
    paddingLeft: '40px',
    paddingTop: '39px',
    paddingBottom: '39px',
    padding: '39px 40px',
  },

  title: {
    fontSize: '22px',
    lineHeight: '28px',
    fontWeight: '500',
    paddingRight: '40px',
    paddingLeft: '40px',
    paddingTop: '39px',
    paddingBottom: '39px',
    padding: '39px 40px',
    color: '#f1f1f1 !important',
    textAlign: 'right',
    margin: 0,
  },
};

function Header(props) {
  const { title } = props;
  return (
    <Grid style={style.header} className="header-bg">
      <Grid.Row>
        <Img style={style.img} src={`{{logoSrc}}`} alt="logo" />
        <p style={style.title} className="header-title">{title}</p>
      </Grid.Row>
    </Grid>
  );
}

export default Header;

