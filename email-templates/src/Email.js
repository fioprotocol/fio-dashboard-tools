import React from 'react';
import Content from './elements/Content';

import Grid from './layout/Grid';
import Header from './elements/Header';
import Body from './elements/Body';

import Footer from './elements/Footer';

import {
  EMAIL_TEMPLATES_TYPES_CONTENT,
  EMAIL_TEMPLATES_TYPES,
} from './constants';

const style = {

  container: {
    backgroundColor: '#efefef',
    paddingRight: '0px',
    paddingLeft: '0px',
    paddingTop: '20px',
    paddingBottom: '20px',
    padding: '20px 0',
    fontFamily: '\'Google Sans\', \'Roboto\', sans-serif',
    letterSpacing: '0.02em'
  },

  main: {
    maxWidth: '602px',
    width: '100%',
  },

};

function Email({ type }) {
  return (
    <center style={style.container} className="container">
      <Grid style={style.main}>
        <Body>
          <Header title={type === EMAIL_TEMPLATES_TYPES.EXPIRING_DOMAINS ? `{{mainTitle}}` : EMAIL_TEMPLATES_TYPES_CONTENT[type].title} />
          <Content>
            {EMAIL_TEMPLATES_TYPES_CONTENT[type].renderComponent({ type })}
          </Content>
          <Footer />
        </Body>
      </Grid>
    </center>
  );
}

export default Email;

