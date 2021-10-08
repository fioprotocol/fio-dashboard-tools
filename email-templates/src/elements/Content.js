import React from 'react';

import Grid from '../layout/Grid';

const style = {

  content: {
    paddingRight: '40px',
    paddingLeft: '40px',
    paddingTop: '40px',
    paddingBottom: '40px',
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

