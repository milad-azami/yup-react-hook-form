import { object, string, number } from "yup";

let userSchema = object({
  name: string().required("لطفا نام را وارد کنید."),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
});

export { userSchema };
