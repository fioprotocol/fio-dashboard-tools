import React from 'react';

import Grid from '../layout/Grid';
import Title from '../elements/Title';
import Button from '../elements/Button';
import Signature from '../elements/Signature';

const style = {

  container: {
    color: '#3C434B',
  },

  todayContainer: {
    width: 'auto',
    margin: '0 auto',
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

  link: {
    fontSize: '12px',
    lineHeight: '24px',
    margin: '7px 0',
    color: '#4588FF',
    textDecoration: 'none',
  },

};

function ConfirmEmail({ text }) {

  return (
    <Grid style={style.container}>
      <Title>Hi!,</Title>

      <p style={style.text}>
        Please confirm your email by clicking the button below.
      </p>

      <Button>Confirm Email</Button>

      <p style={style.text}>
        If the button above does not work, please use this link:
      </p>
      <a href="{{link}}" style={style.link} target="__blank">
        {`{{link}}`}
      </a>
      <Signature />

    </Grid>
  );
}

export default ConfirmEmail;

