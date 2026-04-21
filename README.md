# react-form-utils

Lightweight React form validation utilities.

## Installation

```bash
npm install
```

## Usage

```js
import { validateEmail, validateRequired } from 'react-form-utils';

validateEmail('user@example.com'); // true
validateRequired('');               // false
```

## Known Issues

- `validateEmail` regex is too permissive — accepts invalid TLDs
- Missing phone number validation
- No async validation support

## Contributing

1. Fork and clone
2. `npm install` (sets up git hooks via husky)
3. Make changes, commit — linting runs automatically
