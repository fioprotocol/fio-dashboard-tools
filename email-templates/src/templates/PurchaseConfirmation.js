import React from 'react';

import Badge from '../elements/Badge';
import Signature from '../elements/Signature';
import Title from '../elements/Title';

import Grid from '../layout/Grid';

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

  badgeContentContainer: {
    display: 'inline-block',
    width: '100%',
  },

  firstElement: {
    margin: '5px 20px 5px 0',
    wordBreak: 'break-word',
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '60%',
  },

  secondElement: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },

  boldText: {
    fontWeight: '700',
  },

  defaultMargin: {
    margin: '5px 0',
  },

  bigMargin: {
    margin: '10px 0',
  },

  txId: {
    wordBreak: 'break-word',
  },
};

const OrderItems = () => (
  <div>
    <Badge
      hasGrayBackground={true}
      hasFullWidth={true}
      hasBlackText={true}
      key={`{{address}}{{domain}}`}
    >
      <div style={style.badgeContentContainer}>
        {`{{#if address}}`}
        <p style={style.firstElement}>
          <span style={style.boldText}>{`{{address}}`}</span>
          {`{{#if hasCustomDomain}}`}
          <span style={style.boldText}>@{`{{domain}}`}</span>
          {`{{else}}`}
          <span>@{`{{domain}}`}</span>
          {`{{/if}}`}
        </p>
        {`{{/if}}`}
        {`{{#unless address}}`}
        {`{{#if domain}}`}
        <p style={{ ...style.firstElement, ...style.boldText }}>
          {`{{domain}}`}
        </p>
        {`{{/if}}`}
        {`{{/unless}}`}
        <p style={{ ...style.secondElement, ...style.boldText }}>
          {`{{priceAmount}}`}
        </p>
      </div>
    </Badge>
  </div>
);

const OrderPayment = (props) => (
  <div>
    <p style={style.title}>Payment Details:</p>
    <Badge
      hasFullWidth={true}
      hasBlackBackground={!props.isFailed}
      hasRedBackground={props.isFailed}
    >
      <div style={style.fieldContainer}>
        <div style={{ ...style.bigMargin, ...style.boldText }}>
          <p style={style.firstElement}>Total Cost</p>
          <p style={{ ...style.secondElement, ...style.defaultMargin }}>
            {props.total}
          </p>
        </div>
        <div style={{ ...style.bigMargin, ...style.boldText }}>
          <p style={style.firstElement}>Paid With</p>
          <p style={{ ...style.secondElement, ...style.defaultMargin }}>
            {props.paidWith}
          </p>
        </div>
        {`{{#if ${props.txId}}}`}
        <div style={{ ...style.bigMargin, ...style.boldText }}>
          <p style={style.firstElement}>Transaction ID</p>
          <p style={{ ...style.secondElement, ...style.defaultMargin }}>
            {`{{${props.txId}}}`}
          </p>
        </div>
        {`{{/if}}`}
        {`{{#if ${props.txIds}.length}}`}
        <div style={{ ...style.bigMargin, ...style.boldText }}>
          <p style={style.firstElement}>Transaction IDs</p>

          <ol style={{ ...style.secondElement, ...style.defaultMargin }}>
            {`{{#each ${props.txIds}}}`}
            <li
              key={`{{this}}`}
              style={{ ...style.txId, ...style.defaultMargin }}
            >
              {`{{this}}`}
            </li>
            {`{{/each}}`}
          </ol>
        </div>
        {`{{/if}}`}
      </div>
    </Badge>
  </div>
);

function PurchaseConfirmation() {
  return (
    <Grid style={style.container}>
      <Title>Hi!,</Title>
      <p style={style.text}>
        Please find attached your confirmation of purchase.
      </p>
      {`{{#if successedOrderItems.length}}`}
        <p style={style.title}>Purchases Completed:</p>
        {`{{#each successedOrderItems}}`}
          <OrderItems />
        {`{{/each}}`}
        {`{{#if successedOrderPaymentInfo}}`}
        <OrderPayment
          total={`{{successedOrderPaymentInfo.total}}`}
          paidWith={`{{successedOrderPaymentInfo.paidWith}}`}
          txIds={`successedOrderPaymentInfo.txIds`}
          txId={`successedOrderPaymentInfo.txId`}
        />
        {`{{else}}`}
        {`{{/if}}`}
      {`{{/if}}`}
      {`{{#if failedOrderItems.length}}`}
        <Badge showIcon={true} hasRedBackground={true}>
          <span style={style.boldText}>{`{{error.title}}`}</span>
          <span> - {`{{error.message}}`}</span>
        </Badge>
        <p style={style.title}>Purchases Not Completed</p>
        {`{{#each failedOrderItems}}`}
          <OrderItems />
        {`{{/each}}`}
        {`{{#if failedOrderPaymentInfo}}`}
          <OrderPayment
            isFailed={true}
            total={`{{failedOrderPaymentInfo.total}}`}
            paidWith={`{{failedOrderPaymentInfo.paidWith}}`}
            txIds={`failedOrderPaymentInfo.txIds`}
            txId={`failedOrderPaymentInfo.txId`}
          />
          {`{{else}}`}
        {`{{/if}}`}
      {`{{/if}}`}
      <Signature />
    </Grid>
  );
}

export default PurchaseConfirmation;
