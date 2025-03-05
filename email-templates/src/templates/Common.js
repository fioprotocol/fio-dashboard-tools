import React from 'react';
import Signature from '../elements/Signature';

import Grid from '../layout/Grid';
import Title from '../elements/Title';
import Badge from '../elements/Badge';

const style = {

  container: {
    color: '#3C434B',
    fontSize: '12px',
    lineHeight: '24px',
  },

  title: {
    fontSize: '16px',
    margin: '20px 0 10px 0',
    fontWeight: '700'
  },

  text: {
    fontSize: '12px',
    lineHeight: '24px',
    margin: '7px 0'
  },

};

function Common() {

  return (
    <Grid style={style.container}>
      {`{{{html}}}`}

      <Signature />

    </Grid>
  );
}

export default Common;
