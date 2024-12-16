import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { fromSchema } from "../schema";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(fromSchema),
  });

  const onSubmit = (data) => {
    // Send data to server

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="name" />
      {errors?.name && <span>{errors.name.message}</span>}

      <input {...register("email")} placeholder="email" />
      {errors?.email && <span>{errors.email.message}</span>}

      <input type="submit" />
    </form>
  );
}

export default Form;
