import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";

import { endpoints } from "../common/helpers";
import { useAxios } from "../common/hooks";
import { userSchema } from '../common/schemas'
import { Loader } from '../common/components'

const UserDetail = () => {
    const navigate = useNavigate();

    const id = useParams().id === 'new' ? null : useParams().id;

    const { data, error, loading, fetch } = useAxios();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: userSchema(!!id),
    });

    useEffect(() => {
        if (id) {
            fetch({ url: `${endpoints.users.base}/${id}` });
        }
    }, []);

    useEffect(() => {
        if (data && data.data) {
            setValue("name", data.data.name);
            setValue("email", data.data.email);
            setValue("type", data.data.type);
        }
    }, [data, setValue]);


    const onSubmit = async (values) => {
        try {
            if (id) {
                await fetch({ url: `${endpoints.users.base}/${id}`, method: 'PUT', data: values });
                alert("Usuario actualizadoexitosamente");
            } else {
                await fetch({ url: `${endpoints.users.base}`, method: 'POST', data: values });
                alert("Usuario creado exitosamente ");
            }
            navigate("/");
        } catch (err) {
            alert("Error al guardar el usuario. Intente de nuevo.");
        }
    };

    if (loading) return <Loader />

    return (
        <section className="px-40 py-20">
            <h2>{`${id ? 'Editar Usuario' : 'Crear Usuario'}`}</h2>
            {error && <h1 className="text-error mt-5">{error}!</h1>}

            <form onSubmit={handleSubmit(onSubmit)} className="w-3/12 mt-5">
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        id="name"
                        {...register("name")}
                        type="text"
                    />
                    {errors.name && <p className="text-error">{errors.name.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        {...register("email")}
                        type="email"
                    />
                    {errors.email && <p className="text-error">{errors.email.message}</p>}
                </div>

                {!id && (
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            id="password"
                            {...register("password")}
                        />
                        {errors.password && <p className="text-error">{errors.password.message}</p>}
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="type">Tipo</label>
                    <input
                        id="type"
                        {...register("type")}
                        type="text"
                    />
                    {errors.type && <p className="text-error">{errors.type.message}</p>}
                </div>
                <div className="flex gap-10 mt-8">
                    <button type="submit">[Guardar Cambios]</button>
                    <button type="button" onClick={() => navigate("/")}>[Cancelar]</button>
                </div>
            </form>
        </section >
    );
};

export default UserDetail;
