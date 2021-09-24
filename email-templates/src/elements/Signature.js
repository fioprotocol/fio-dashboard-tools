import React from 'react';

import Grid from '../layout/Grid';

const style = {
  text: {
    fontSize: '12px',
    fontWeight: '500',
    margin: '22px 0 0',
    fontStyle: 'italic',
  },
  signature: {
    fontSize: '13px',
    lineHeight: '24px',
    margin: '10px 0 0',
  },

};

function Signature() {
  return (
    <Grid>
      <p style={style.text}>
        Best wishes,
      </p>
      <p style={style.signature}>
        <b>The FIO Dashboard Team</b>
      </p>
    </Grid>
  );
}

export default Signature;

