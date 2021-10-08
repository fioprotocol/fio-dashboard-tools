import React from 'react';

import Grid from '../layout/Grid';

const style = {

  footer: {
    margin: '0 0 60px',
    color: '#3C434B',
    background: '#ffffff',
  },

  p: {
    fontSize: '12px',
    lineHeight: '24px',
    margin: '10px 0 0',
    fontWeight: '700'
  },

  q: {
    fontSize: '12px',
    lineHeight: '24px',
    margin: 0,
    borderTop: '1px solid #eaeaea',
    width: '100%',
    paddingTop: '40px'
  },

  content: {
    width: '100%',
    paddingRight: '40px',
    paddingLeft: '40px',
    paddingTop: '0',
    paddingBottom: '0',
    padding: '0 40px',
  },

  link: {
    fontSize: '12px',
    lineHeight: '24px',
    margin: '7px 0',
    color: '#4588FF',
    textDecoration: 'none',
  },

};

function Footer() {
  return (
    <Grid style={style.footer}>
      <Grid.Cell style={style.content}>
        <p style={style.q}>
          Have questions?
        </p>
        <p style={style.p}>
          You can raise a FIO Support request from the <a href="{{supportLink}}" target="_blank" style={style.link}>FIO Help Center</a>.
        </p>
      </Grid.Cell>
    </Grid>
  );
}

export default Footer;

