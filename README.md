# `PropTypes.elementType`

PropTypes for React element types.

You can use this library [until this PR is merged](https://github.com/facebook/prop-types/pull/211) in the official `PropTypes`.

`npm install prop-types-elementtype`<br />
or<br />
`yarn add prop-types-elementtype`

# Usage
```js
import React from 'react';
import elementType from 'prop-types-elementtype';

const MyComponent = () => <div>Hello there!</div>;

const MyWrapper = ({ welcomer: Welcomer }) => <Welcomer />;
MyWrapper.propTypes = {
  welcomer: elementType
};

```