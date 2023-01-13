import React from 'react';

import Grid from '../layout/Grid';

const style = {
  wrapper: {
    width: 'auto',
    margin: '10px 0 15px',
  },

  button: {
    width: 'auto',
    backgroundColor: '#765CD6',
    borderRadius: '100px',
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: '600',
    borderTop: '10px solid #765CD6',
    borderBottom: '10px solid #765CD6',
    borderLeft: '50px solid #765CD6',
    borderRight: '50px solid #765CD6',
    color: '#ffffff',
    textDecoration: 'none',
    textAlign: 'center',

    WebkitBoxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.11)',
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.11)',
  },
};

function Button({ children }) {
  return (
    <Grid style={style.wrapper}>
      <Grid.Row>
        <Grid.Cell>
          <a href="{{link}}" style={style.button} target="__blank">
            {children}
          </a>
        </Grid.Cell>
      </Grid.Row>
    </Grid>
  );
}

export default Button;

