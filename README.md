Inputjs
------

Javascript Input Class with Joi validatior

## Install
```bash
npm install inputjs --save
```

## Example

```js
import InputJS from 'inputjs';
import joi from 'joi';

class ExampleInput extends InputJS {
  constructor(data = {}) {
    super(data, {
      id: joi.string().required(),
      name: joi.string().required(),
    });
  }
}
```
