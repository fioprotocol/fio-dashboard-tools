import React from 'react';

import Grid from '../layout/Grid';

const style = {

  wrapper: {
    width: 'auto',
    backgroundColor: '#00c1ff',
    borderRadius: '12px',
    margin: '10px 0'
  },

  text: {
    fontSize: '12px',
    lineHeight: '18px',
    paddingRight: '36px',
    paddingLeft: '15px',
    paddingTop: '0',
    paddingBottom: '0',
    padding: '0px 36px 0 15px',
    color: '#ffffff',
  },

  icon: {
    width: '18px',
    height: '18px',
    lineHeight: '18px',
    borderRadius: '9px',
    fontSize: '12px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    color: '#00c1ff',
  },

  iconContainer: {
    paddingRight: '0',
    paddingLeft: '15px',
    paddingTop: '15px',
    paddingBottom: '5px',
    padding: '15px 0 5px 15px',
    verticalAlign: 'top',
  }

};

function Badge({ children }) {
  return (
    <Grid style={style.wrapper}>
      <Grid.Row>
        <Grid.Cell style={style.iconContainer}>
          <div style={style.icon}>!</div>
        </Grid.Cell>
        <Grid.Cell>
          <p style={style.text}>
            {children}
          </p>
        </Grid.Cell>
      </Grid.Row>
    </Grid>
  );
}

export default Badge;

