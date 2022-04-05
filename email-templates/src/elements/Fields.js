import React from 'react';

import Badge from './Badge';

import {
  TRANSACTIONAL_EMAIL_DATA_TITLE,
} from '../constants';

const style = {
  fieldContainer: {
    display: 'inline-block',
  },

  fieldTitle: {
    margin: '5px 15px 5px 0',
    wordBreak: 'break-word',
    display: 'inline-block',
    verticalAlign: 'middle',
  },

  defaultWidth: {
    width: '160px',
  },

  halfWidth: {
    width: '200px',
  },

  fieldContent: {
    wordBreak: 'break-all',
    margin: '5px 0',
    display: 'inline-block',
    verticalAlign: 'middle',
  },

  titleContent: {
    padding: '0',
    fontSize: '12px',
    lineHeight: '12px',
    fontWeight: '200',
  },
};

export const RenderDefaultField = ({ field }) => (
  <Badge
    hasGrayBackground={true}
    hasFullWidth={true}
    hasBlackText={true}
    hasBoldText={true}
  >
    <div style={style.fieldContainer}>
        <p style={{ ...style.fieldTitle, ...style.defaultWidth }}>
          {TRANSACTIONAL_EMAIL_DATA_TITLE[field]}
        </p>
        <p style={style.fieldContent}>
          {`{{${field}}}` || '-'}
        </p>
    </div>
  </Badge>
);

const RenderHeader = ({ field }) => (
  <Badge
    transparentBackground={true}
    hasFullWidth={true}
    hasBlackText={true}
    hasBoldText={true}
  >
    <div style={style.fieldContainer}>
      {TRANSACTIONAL_EMAIL_DATA_TITLE[field].map((title, index) => {
        const isFirst = index === 0;
        return (
          <p
            style={
              isFirst
                ? {
                    ...style.fieldTitle,
                    ...style.titleContent,
                    ...style.halfWidth,
                  }
                : { ...style.fieldTitle, ...style.titleContent }
            }
            key={title}
          >
            {title}
          </p>
        );
      })}
    </div>
  </Badge>
);

export const RenderDomainField = ({ field }) => (
  <div>
    <RenderHeader field={field} />
    {`{{#each domains}}`}
      <Badge
        hasGrayBackground={true}
        hasFullWidth={true}
        hasBlackText={true}
        hasBoldText={true}
        key={`{{name}}`}
      >
        <div style={style.fieldContainer}>
          <p style={{ ...style.fieldTitle, ...style.halfWidth }}>
            {`@{{name}}`}
          </p>
          <p style={style.fieldContent}>
            {`{{date}}`}
          </p>
        </div>
      </Badge>
    {`{{/each}}`}
  </div>
);

export const RenderCryptoHandleField = ({ field }) => (
  <div>
    <RenderHeader field={field} />
    {`{{#each fioCryptoHandles}}`}
      <Badge
        hasGrayBackground={true}
        hasFullWidth={true}
        hasBlackText={true}
        hasBoldText={true}
        key={`{{name}}`}
      >
        <div style={style.fieldContainer}>
          <p style={{ ...style.fieldTitle, ...style.halfWidth }}>
            {`{{name}}`}
          </p>
          <p style={style.fieldContent}>
            {`{{bundles}} Bundles`}
          </p>
        </div>
      </Badge>
    {`{{/each}}`}
  </div>
);
