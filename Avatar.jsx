import React from 'react';
import PropTypes from 'prop-types';
import * as RadixAvatar from '@radix-ui/react-avatar';
import { styled } from '../stitches.config'

const SIZES = {
  tiny: 16,
  small: 20,
  medium: 24,
  large: 32,
  extraLarge: 40,
};

const StyledAvatar = styled(RadixAvatar.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '50%',
  variants: {
    size: {
      tiny: {
        height: SIZES.tiny,
        width: SIZES.tiny,
        fontSize: 8
      },
      small: {
        height: SIZES.small,
        width: SIZES.small,
        fontSize: 9
      },
      medium: {
        height: SIZES.medium,
        width: SIZES.medium,
        fontSize: 12
      },
      large: {
        height: SIZES.large,
        width: SIZES.large,
        fontSize: 16
      },
      extraLarge: {
        height: SIZES.extraLarge,
        width: SIZES.extraLarge,
        fontSize: 16
      },
    }
  }
});

const StyledImage = styled(RadixAvatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const StyledFallback = styled(RadixAvatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$palettePrimaryMain',
  color: '$fullWhite',
  fontFamily: '$default',
  fontSize: 'inherit',
  
});

const Avatar = ({initials, src, size, className}) => (
  <StyledAvatar size={size} className={className}>
    {src && <StyledImage src={src} /> }
    <StyledFallback>{initials}</StyledFallback>
  </StyledAvatar>
);

Avatar.defaultProps = {
  src: '',
  size: 'medium',
  className: '',
  initials: '',
}

Avatar.propTypes = {
  /**
   * The url of the avatar image (if applicable)
   */
  src: PropTypes.string,
  /**
   * Set a size for the Avatar
   */
  size: PropTypes.oneOf(Object.keys(SIZES)),
  /**
   * An optional className can be passed info any additional styling.
   */
  className: PropTypes.string,
  /**
   * The letters/initials of the user if no Avatar image is supplied.
   */
  initials: PropTypes.string,
}

export default Avatar;