import { FieldValues, useForm } from "react-hook-form";
interface FormData {
  name: string;
  age: number;
}
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { minLength: 3, required: true })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && <p>the name field is required.</p>}
        {errors.name?.type === "minLength" && <p>name is too short...</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true, min: 18 })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "min" && (
          <p className="text-danger">sorry we cant sell to kids</p>
        )}
        {errors.age?.type === "required" && <p>plase enter your age</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
