import React from 'react';

import Grid from '../layout/Grid';

const style = {

  content: {
    backgroundColor: '#ffffff',
    padding: 0,
    margin: 0
  },

};

function Body({ children }) {
  return (
    <Grid>
      <Grid.Cell style={style.content}>
        {children}
      </Grid.Cell>
    </Grid>
  );
}

export default Body;

