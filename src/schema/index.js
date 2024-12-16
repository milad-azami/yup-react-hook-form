import { object, string, number } from "yup";

let userSchema = object({
  name: string().required("لطفا نام را وارد کنید."),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
});

const fromSchema = object({
  name: string().required("لطفا اسم را وارد کنید."),
  email: string()
    .email("لطفا ایمیل معتبر وارد کنید")
    .required("ایمیل ضروری است"),
}).required();

export { userSchema, fromSchema };
