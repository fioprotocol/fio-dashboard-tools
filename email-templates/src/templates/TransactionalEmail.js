import React from 'react';

import Grid from '../layout/Grid';
import Title from '../elements/Title';
import Button from '../elements/Button';
import Signature from '../elements/Signature';

import {
  TRANSACTIONAL_EMAILS_CONTENT,
  TRANSACTIONAL_EMAIL_DATA_FIELDS,
  TRANSACTIONAL_EMAIL_DATA_FIELDS_RENDER,
  EMAIL_TEMPLATES_TYPES,
} from '../constants';

const style = {
  container: {
    color: '#3C434B',
  },

  title: {
    fontSize: '12px',
    lineHeight: '24px',
    margin: '0',
    fontWeight: '700',
  },

  text: {
    fontSize: '12px',
    lineHeight: '24px',
    margin: '7px 0',
  },

  link: {
    fontSize: '12px',
    lineHeight: '24px',
    margin: '7px 0',
    color: '#4588FF',
    textDecoration: 'none',
  },

};

function TransactionalEmail({ type }) {
  return (
    <Grid style={style.container}>
      <Title>Hi!,</Title>
      <p style={style.text}>{type === EMAIL_TEMPLATES_TYPES.EXPIRING_DOMAINS ? `{{title}}` : TRANSACTIONAL_EMAILS_CONTENT[type].title}</p>
      <p style={style.title}>{TRANSACTIONAL_EMAILS_CONTENT[type].dataTitle}</p>
      {TRANSACTIONAL_EMAILS_CONTENT[type].dataFields.map((field) =>
        TRANSACTIONAL_EMAIL_DATA_FIELDS_RENDER[
          field === TRANSACTIONAL_EMAIL_DATA_FIELDS.EXPIRING_DOMAINS ||
          field === TRANSACTIONAL_EMAIL_DATA_FIELDS.LOW_BUNDLE_COUNT
            ? field
            : 'default'
        ].renderField({ field, key: field })
      )}
      <Button>{TRANSACTIONAL_EMAILS_CONTENT[type].buttonText}</Button>
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

export default TransactionalEmail;
