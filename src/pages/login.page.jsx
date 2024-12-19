import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAxios, useAuth } from "../common/hooks";
import { loginSchema } from '../common/schemas/login.schema'
import { endpoints } from "../common/helpers";

const Login = () => {
    const { login } = useAuth();
    const { data, success, error, loading, fetch } = useAxios();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: loginSchema,
    });


    const onSubmit = async (values) => {
        fetch({
            url: endpoints.auth.login,
            method: "POST",
            data: values,
        });
    };

    useEffect(() => {
        if (success) {
            login(data);
        }
    }, [success]);

    return (
        <section className="px-40 py-20">
            <h2>
                Iniciar Sesión
            </h2>
            {error && (<h1 className="mt-4 text-error">{error}!</h1>)}

            <form className="w-3/12 mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        // value={'john.doecccc@example.com'}
                        {...register("email")}
                    />
                    {errors.email && <p className="text-error">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        // value={'securepassword123'}
                        {...register("password")}
                    />
                    {errors.password && <p className="text-error">{errors.password.message}</p>}
                </div>

                <button
                    className="mt-4"
                    type="submit"
                    disabled={loading}
                >
                    {`${loading ? '[> Ingresando...]' : '[> Ingresar]'}`}
                </button>
            </form>
        </section>
    );
};

export default Login;
