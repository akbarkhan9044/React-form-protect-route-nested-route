import React from 'react'
import {useForm} from "react-hook-form";
export default function Formdata() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit=(data) =>{
        console.log(data);
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input
            type="text"
            placeholder='Enter Username'
            {...register("username",{
                required:"Username is required",
                minLength:{
                    value:3,
                    message:"Username minimum should be 3 character."
                },
                maxLength:{
                    value:5,
                    message:"Username maximum should be 5 character."
                }
                
            })}
            />
            {errors.username && <p style={{
                color:"red"
            }}>{errors.username.message}</p>}
            <input
            type="password"
            placeholder='Enter Password'
            {...register("password",{
                required:"Password is required.",
                minLength:{
                    value:4,
                    message:"Password minimum length should be 4 characters.."
                },
                maxLength:{
                    value:6,
                    message:"Password maximum length should be 6 characters."
                }
            })}
            />
            {errors.password && <p style={{
                color:"red"
            }} >{errors.password.message}</p>}
            <input
            type="submit"
            />
        </div>
    </form>
  )
}
