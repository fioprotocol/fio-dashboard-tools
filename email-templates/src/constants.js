import React from 'react';

import TransactionalEmail from './templates/TransactionalEmail';
import PassRecovery from './templates/PassRecovery';
import ConfirmEmail from './templates/ConfirmEmail';
import CreateAccount from './templates/CreateAccount';
import PurchaseConfirmation from './templates/PurchaseConfirmation';
import Common from './templates/Common';
import {
  RenderDefaultField,
  RenderCryptoHandleField,
  RenderDomainField,
} from './elements/Fields';


export const EMAIL_TEMPLATES_TYPES = {
  APPROVE_FIO_REQUEST: 'approveFioRequest',
  REJECT_FIO_REQUEST: 'rejectFioRequest',
  NEW_FIO_REQUEST: 'newFioRequest',
  BALANCE_CHANGE: 'balanceChange',
  EXPIRING_DOMAINS: 'expiringDomains',
  LOW_BUNDLE_COUNT: 'lowBundleCount',
  PASSWORD_RECOVERY: 'passRecovery',
  CONFIRM_EMAIL: 'confirmEmail',
  CREATE_ACCOUNT: 'createAccount',
  PURCHASE_CONFIRMATION: 'purchaseConfirmation',
  COMMON: 'common',
};

export const EMAIL_TEMPLATES_TYPES_CONTENT = {
  [EMAIL_TEMPLATES_TYPES.APPROVE_FIO_REQUEST]: {
    title: 'FIO Request Approved',
    renderComponent: (props) => <TransactionalEmail {...props} />,
  },
  [EMAIL_TEMPLATES_TYPES.REJECT_FIO_REQUEST]: {
    title: 'FIO Request Rejected',
    renderComponent: (props) => <TransactionalEmail {...props} />,
  },
  [EMAIL_TEMPLATES_TYPES.NEW_FIO_REQUEST]: {
    title: 'New FIO Request',
    renderComponent: (props) => <TransactionalEmail {...props} />,
  },
  [EMAIL_TEMPLATES_TYPES.BALANCE_CHANGE]: {
    title: 'FIO Balance Change',
    renderComponent: (props) => <TransactionalEmail {...props} />,
  },
  [EMAIL_TEMPLATES_TYPES.EXPIRING_DOMAINS]: {
    renderComponent: (props) => <TransactionalEmail {...props} />,
  },
  [EMAIL_TEMPLATES_TYPES.LOW_BUNDLE_COUNT]: {
    title: 'Low Bundles',
    renderComponent: (props) => <TransactionalEmail {...props} />,
  },
  [EMAIL_TEMPLATES_TYPES.PASSWORD_RECOVERY]: {
    title: 'Password Recovery',
    renderComponent: (props) => <PassRecovery {...props} />,
  },
  [EMAIL_TEMPLATES_TYPES.CONFIRM_EMAIL]: {
    title: 'Confirm Email',
    renderComponent: (props) => <ConfirmEmail {...props} />,
  },
  [EMAIL_TEMPLATES_TYPES.CREATE_ACCOUNT]: {
    title: 'Welcome to the FIO App',
    renderComponent: (props) => <CreateAccount {...props} />,
  },
  [EMAIL_TEMPLATES_TYPES.PURCHASE_CONFIRMATION]: {
    title: 'Purchase Confirmation',
    renderComponent: (props) => <PurchaseConfirmation {...props} />,
  },
  [EMAIL_TEMPLATES_TYPES.COMMON]: {
    title: '{{headerTitle}}',
    renderComponent: (props) => <Common {...props} />,
  },
};

export const TRANSACTIONAL_EMAIL_DATA_FIELDS = {
  DATE: 'date',
  REQUESTOR: 'requestor',
  TO: 'to',
  REQUESTING_FIO_CRYPTO_HANDLE: 'requestingFioCryptoHandle',
  REQUEST_SENT_TO: 'requestSentTo',
  FIO_BALANCE_CHANGE: 'fioBalanceChange',
  NEW_FIO_BALANCE: 'newFioBalance',
  EXPIRING_DOMAINS: 'expiringDomains',
  LOW_BUNDLE_COUNT: 'lowBundles',
};

export const TRANSACTIONAL_EMAIL_DATA_TITLE = {
  [TRANSACTIONAL_EMAIL_DATA_FIELDS.DATE]: 'Date / Time',
  [TRANSACTIONAL_EMAIL_DATA_FIELDS.REQUESTOR]: 'Requestor',
  [TRANSACTIONAL_EMAIL_DATA_FIELDS.TO]: 'To',
  [TRANSACTIONAL_EMAIL_DATA_FIELDS.FIO_BALANCE_CHANGE]: 'FIO Balance Change',
  [TRANSACTIONAL_EMAIL_DATA_FIELDS.NEW_FIO_BALANCE]: 'New FIO Balance',
  [TRANSACTIONAL_EMAIL_DATA_FIELDS.EXPIRING_DOMAINS]: [
    'FIO Domain Name',
    'Expiration Date',
  ],
  [TRANSACTIONAL_EMAIL_DATA_FIELDS.LOW_BUNDLE_COUNT]: [
    'FIO Handle',
    'Bundle Remaining',
  ],
  [TRANSACTIONAL_EMAIL_DATA_FIELDS.REQUESTING_FIO_CRYPTO_HANDLE]:
    'Requesting FIO Handle',
  [TRANSACTIONAL_EMAIL_DATA_FIELDS.REQUEST_SENT_TO]: 'Request Sent To',
};

export const TRANSACTIONAL_EMAILS_CONTENT = {
  [EMAIL_TEMPLATES_TYPES.APPROVE_FIO_REQUEST]: {
    buttonText: 'View Request',
    dataTitle: 'FIO Request Details:',
    dataFields: [
      TRANSACTIONAL_EMAIL_DATA_FIELDS.DATE,
      TRANSACTIONAL_EMAIL_DATA_FIELDS.REQUESTING_FIO_CRYPTO_HANDLE,
      TRANSACTIONAL_EMAIL_DATA_FIELDS.REQUEST_SENT_TO,
    ],
    title: 'Your FIO request has been approved.',
  },
  [EMAIL_TEMPLATES_TYPES.REJECT_FIO_REQUEST]: {
    buttonText: 'View Request',
    dataTitle: 'FIO Request Details:',
    dataFields: [
      TRANSACTIONAL_EMAIL_DATA_FIELDS.DATE,
      TRANSACTIONAL_EMAIL_DATA_FIELDS.REQUESTING_FIO_CRYPTO_HANDLE,
      TRANSACTIONAL_EMAIL_DATA_FIELDS.REQUEST_SENT_TO,
    ],
    title: 'Your FIO request has been rejected.',
  },
  [EMAIL_TEMPLATES_TYPES.NEW_FIO_REQUEST]: {
    buttonText: 'Pay Request',
    dataTitle: 'FIO Request Details:',
    dataFields: [
      TRANSACTIONAL_EMAIL_DATA_FIELDS.DATE,
      TRANSACTIONAL_EMAIL_DATA_FIELDS.REQUESTOR,
      TRANSACTIONAL_EMAIL_DATA_FIELDS.TO,
    ],
    title: 'You have received a new FIO request.',
  },
  [EMAIL_TEMPLATES_TYPES.BALANCE_CHANGE]: {
    buttonText: 'View Balance',
    dataTitle: 'FIO Balance Details:',
    dataFields: [
      TRANSACTIONAL_EMAIL_DATA_FIELDS.DATE,
      TRANSACTIONAL_EMAIL_DATA_FIELDS.FIO_BALANCE_CHANGE,
      TRANSACTIONAL_EMAIL_DATA_FIELDS.NEW_FIO_BALANCE,
    ],
    title: 'Your FIO balance has changed.',
  },
  [EMAIL_TEMPLATES_TYPES.EXPIRING_DOMAINS]: {
    buttonText: 'Renew Domain(s)',
    dataTitle: 'FIO Domain Details:',
    dataFields: [TRANSACTIONAL_EMAIL_DATA_FIELDS.EXPIRING_DOMAINS],
  },
  [EMAIL_TEMPLATES_TYPES.LOW_BUNDLE_COUNT]: {
    buttonText: 'Renew Bundles',
    dataTitle: 'FIO Bundle Details:',
    dataFields: [TRANSACTIONAL_EMAIL_DATA_FIELDS.LOW_BUNDLE_COUNT],
    title: 'Your remaining FIO bundled transactions is low.',
  },
};

export const TRANSACTIONAL_EMAIL_DATA_FIELDS_RENDER = {
  [TRANSACTIONAL_EMAIL_DATA_FIELDS.EXPIRING_DOMAINS]: {
    renderField: (props) => <RenderDomainField {...props} />,
  },
  [TRANSACTIONAL_EMAIL_DATA_FIELDS.LOW_BUNDLE_COUNT]: {
    renderField: (props) => <RenderCryptoHandleField {...props} />,
  },
  default: {
    renderField: (props) => <RenderDefaultField {...props} />,
  },
};