import React from 'react';
import Signature from '../elements/Signature';

import Grid from '../layout/Grid';
import Title from '../elements/Title';
import Badge from '../elements/Badge';

const style = {

  container: {
    color: '#3C434B',
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

function CreateAccount({ text }) {

  return (
    <Grid style={style.container}>
      <Title>Thank you for creating a FIO App account!</Title>

      <p style={style.text}>
        Please remember that for your security FIO App Team does not have access to your password or your private keys. We cannot reset your password in case you forget it, like many website do.
      </p>

      <Badge showIcon={true}><b>Write down your password</b> - It is very important that you write down your password in a secure location.</Badge>

      <p style={style.text}>
        <b>You should also set-up Password Recovery</b>, which will require you to set-up two secret questions and answers and send an email to you to access Password Recovery in the future. If you forget the password, you will be asked to click a link in the Password Recovery email and answer the secret questions. If you do not have access to the email or do not remember the secret answers,
      </p>

      <p style={style.text}>
        <b>FIO App Team will not be able to reset your password and you will not be able to access the FIO App.</b>
      </p>

      <Signature />

    </Grid>
  );
}

export default CreateAccount;
