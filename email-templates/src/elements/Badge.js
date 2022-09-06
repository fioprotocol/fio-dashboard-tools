import React from 'react';

import Grid from '../layout/Grid';

const style = {
  wrapper: {
    width: 'auto',
    backgroundColor: '#00c1ff',
    borderRadius: '12px',
    margin: '10px 0'
  },

  text: {
    fontSize: '12px',
    lineHeight: '18px',
    paddingRight: '36px',
    paddingLeft: '15px',
    paddingTop: '0',
    paddingBottom: '0',
    padding: '10px 36px 10px 15px',
    color: '#ffffff',
  },

  icon: {
    width: '18px',
    height: '18px',
    lineHeight: '18px',
    borderRadius: '9px',
    fontSize: '12px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    color: '#00c1ff',
  },

  iconContainer: {
    paddingRight: '0',
    paddingLeft: '15px',
    paddingTop: '15px',
    paddingBottom: '5px',
    padding: '15px 0 5px 15px',
    verticalAlign: 'top',
  },

  blackBackground: {
    backgroundColor: '#000000',
  },

  grayBackground: {
    backgroundColor: '#F2F2F2',
  },

  redBackground: {
    backgroundColor: '#E33E3E',
  },

  transparentBackground: {
    backgroundColor: 'transparent',
  },

  fullWidth: {
    width: '100%',
  },

  blackColor: {
    color: '#202020',
  },

  boldText: {
    fontWeight: '700',
  },
};

function Badge({
  children,
  showIcon,
  hasGrayBackground,
  hasBlackBackground,
  hasRedBackground,
  hasFullWidth,
  hasBlackText,
  hasBoldText,
  transparentBackground,
}) {
  let wrapperStyle = style.wrapper;
  let textStyle = style.text;

  if (hasGrayBackground) wrapperStyle = { ...wrapperStyle, ...style.grayBackground };
  if (hasBlackBackground) wrapperStyle = { ...wrapperStyle, ...style.blackBackground };
  if (hasRedBackground) wrapperStyle = { ...wrapperStyle, ...style.redBackground };
    if (transparentBackground)
      wrapperStyle = { ...wrapperStyle, ...style.transparentBackground };
  if (hasFullWidth) wrapperStyle = { ...wrapperStyle, ...style.fullWidth };
  if (hasBlackText) textStyle = { ...textStyle, ...style.blackColor };
  if (hasBoldText) textStyle = { ...textStyle, ...style.boldText };

  return (
    <Grid style={wrapperStyle}>
      <Grid.Row>
        {showIcon ? (
          <Grid.Cell style={style.iconContainer}>
            <div style={style.icon}>!</div>
          </Grid.Cell>
        ) : (
          <span />
        )}
        <Grid.Cell>
          <div style={textStyle}>{children}</div>
        </Grid.Cell>
      </Grid.Row>
    </Grid>
  );
}

export default Badge;

