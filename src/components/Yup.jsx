import { userSchema } from "../schema";

const mockUserData = {
  name: "Milad Azami",
  age: 3,
  email: "milad@gmail.com",
  website: "https://botostart.ir",
};

async function validate(data) {
  const userValidation = await userSchema.validate(data);
  console.log(userValidation);
}

function Yup() {
  validate(mockUserData);

  return <div>Yup</div>;
}

export default Yup;
