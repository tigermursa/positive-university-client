import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [login, { error }] = useLoginMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap(); //to get easily
    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    console.log(res);
    console.log(user);
  };
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"}}>
      <form onSubmit={handleSubmit(onSubmit)} style={{border:"2px solid red"}}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" {...register("id")}></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" {...register("password")}></input>
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
