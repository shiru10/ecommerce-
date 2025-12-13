const LoginForm = (props) => {
  const { register, handleSubmit, errors, handleLoginSubmit } = props;
  return (
    <div className="border p-4 max-w-lg rounded-2xl flex flex-col justify-center items-center">
      <h3 className="text-3xl mb-3 font-semibold">Login Form</h3>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleLoginSubmit)}>
        <div className="flex gap-1">
          <label>Username:</label>
          <input
            type="text"
            className="border p-0.5 rounded-l"
            {...register("username")}
          />
          <p>{errors.username?.message}</p>
        </div>
        <div className="flex gap-1">
          <label>Password:</label>
          <input
            type="password"
            className="border p-0.5 rounded-l"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <button
          type="submit"
          className="p-2 rounded-2xl bg-emerald-400 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
