Inputjs
------

Javascript Input Class with Joi validatior

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
