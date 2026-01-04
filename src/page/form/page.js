import React from 'react'
import {useForm} from "react-hook-form";
export default function Form() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit=(data)=>{
        console.log(data);
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                type="text"
                placeholder='Enter Name'
                {...register("username",{
                    required:"Username is required",
                    minLength:{
                        value:5,
                        message:"Username should be atleast 5 characters."
                    },
                    maxLength:{
                        value:6,
                        message:"Username should be maximum 6 characters."
                    }
                })}
                />
                {errors.username &&<p style={{
                    color:"red"
                }}>{errors.username.message}</p>}
            </div>
            <div>
                <input
                type="password"
                placeholder='Enter Password'
                {...register("password",{
                    required:"Password is required.",
                    minLength:{
                        value:3,
                        message:"Password minimum length should be 3 characters."
                    },
                    maxLength:{
                        value:5,
                        message:"Password maximum length should be 5 characters. "
                    }
                })}
                />
                {errors.password &&<p style={{
                    color:"red"
                }}>{errors.password.message}</p>}
            </div>
            <input
            type="submit"
            />
        </form>
    </div>
  )
}
