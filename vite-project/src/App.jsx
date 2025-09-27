import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

async function onSubmit(data) {
  await new Promise((resolve)=> setTimeout(resolve,5000));

    console.log("Submitting the Data", data);
  }

  return (
    <form id="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">First Name:</label>
        <input
        className={errors.firstName ? 'input-error':''}
          {...register("firstName", {

            required: true,
            minLength: { value: 3, message: "minLength atleast 3" },
            maxLength: { value: 10, message: "maxLength atleast 10" },
          })}
        />
        {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
      </div>
      <div>
        <label htmlFor="">Middle Name:</label>
        <input
         className={errors.MiddleName ? 'input-error':''}
          {...register("MiddleName", {
            required: true,
            minLength: { value: 3, message: "minLength atleast 3" },
            maxLength: { value: 6, message: "maxLength atleast 6" },
          })}
        />
        {errors.MiddleName && <p className="error-msg">{errors.MiddleName.message}</p>}
      </div>
      <div>
        <label htmlFor="">Last Name:</label>
        <input
        className={errors.LastName ? 'input-error':''}
          {...register("LastName", {
            required: true,
            minLength: { value: 3, message: "minLength atleast 3" },
            maxLength: { value: 6, message: "maxLength atleast 6" },
          })}
        />
        {errors.LastName && <p className="error-msg">{errors.LastName.message}</p>}
      </div>
      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? "Submitting" :"Submit"}/>
    </form>
  );
}

export default App;
