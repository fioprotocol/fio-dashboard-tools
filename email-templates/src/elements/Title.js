import React from 'react';

import Grid from '../layout/Grid';

const style = {

  wrapper: {
    width: 'auto',
  },

  title: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '28px',
    marginTop: '5px',
    marginBottom: '10px',
    color: '#3C434B',
  },

};

function Title({ children }) {
  return (
    <Grid style={style.wrapper}>
      <h1 style={style.title} className="title-heading">
        {children}
      </h1>
    </Grid>
  );
}

export default Title;

