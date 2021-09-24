import React from 'react';
import Content from './elements/Content';

import Grid from './layout/Grid';
import Header from './elements/Header';
import Body from './elements/Body';
import CreateAccount from './templates/CreateAccount';
import PassRecovery from './templates/PassRecovery';
import ConfirmEmail from './templates/ConfirmEmail';
import Footer from './elements/Footer';

const style = {

  container: {
    backgroundColor: '#efefef',
    padding: '20px 0',
    fontFamily: '\'Google Sans\', \'Roboto\', sans-serif',
    letterSpacing: '0.02em'
  },

  main: {
    maxWidth: '602px',
    width: '100%',
  },

};

function Email({ type, data }) {
  const titles = {
    createAccount: 'Welcome to the FIO Dashboard',
    confirmEmail: 'Confirm Email',
    passRecovery: 'Password Recovery',
  };
  return (
    <center style={style.container}>
      <Grid style={style.main}>
        <Body>
        <Header title={titles[type]} />
          <Content>
            {type === 'createAccount' && <CreateAccount data={data} />}
            {type === 'confirmEmail' && <ConfirmEmail data={data} />}
            {type === 'passRecovery' && <PassRecovery data={data} />}
          </Content>
          <Footer />
        </Body>
      </Grid>
    </center>
  );
}

export default Email;

