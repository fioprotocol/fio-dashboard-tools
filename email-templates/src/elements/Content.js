import React from 'react';

import Grid from '../layout/Grid';

const style = {

  content: {
    padding: '40px',
  },

};

function Content({ children }) {
  return (
    <Grid>
      <Grid.Cell style={style.content}>
        {children}
      </Grid.Cell>
    </Grid>
  );
}

export default Content;

