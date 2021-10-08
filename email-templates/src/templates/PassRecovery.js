import React from 'react';

import Grid from '../layout/Grid';
import Signature from '../elements/Signature';
import Title from '../elements/Title';

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

function PassRecovery({ text }) {

  return (
    <Grid style={style.container}>
      <Title>Hi!,</Title>

      <p style={style.text}>
        Please keep this email and the recovery link below to access FIO Dashboard in case you lose your password. <b>Without this email and recover link, you will not be able to recover your account.</b>
      </p>

      <a href="{{link}}" style={style.link} target="__blank">
        {`{{link}}`}
      </a>

      <Signature />

    </Grid>
  );
}

export default PassRecovery;

