# zod-validated-form-data

A lightweight library for validating formData with Zod

## Installation

```bash
npm install zod-validated-form-data
```

## Usage

```typescript
import { getValidatedFormData } from 'zod-validated-form-data';

const schema = z.object({
  name: z.string(),
  age: z.coerce.number(),
});

const formData = new FormData();

formData.append('name', 'John Doe');
formData.append('age', '30');

const validatedData = await getValidatedFormData({ schema, formData });
```
