import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from '../src/Avatar';

const exampleImage = 'https://picsum.photos/id/1005/400/400';

storiesOf('Avatar', module)
  .addWithInfo('Sizes', () => (
    <div style={{display: 'grid', gridGap: '4px', gridAutoFlow: 'column', maxWidth: 200, alignItems: 'center'}}>
      <Avatar size="tiny" initials="NM" />
      <Avatar size="small" initials="NM" />
      <Avatar size="medium" initials="LA" />
      <Avatar size="large" initials="LA" />
      <Avatar size="extraLarge" initials="LA" />
    </div>
  ))
  .addWithInfo('Images', () => (
    <div style={{display: 'grid', gridGap: '4px', gridAutoFlow: 'column', maxWidth: 200, alignItems: 'center'}}>
      <Avatar size="tiny" src={exampleImage} initials="NM" />
      <Avatar size="small" src={exampleImage} initials="NM" />
      <Avatar size="medium" src={exampleImage} initials="LA" />
      <Avatar size="large" src={exampleImage} initials="LA" />
      <Avatar size="extraLarge" src={exampleImage} initials="LA" />
    </div>
  ));