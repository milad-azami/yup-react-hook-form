import { userSchema } from "../schema";

const mockUserData = {
  name: "",
  age: 3,
  email: "milad@gmail.com",
  website: "https://botostart.ir",
};

function Yup() {
  async function validate(data) {
    const userValidation = await userSchema.validate(data);
    console.log(userValidation);
  }

  validate(mockUserData);

  return <div>Yup</div>;
}

export default Yup;
