import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios, useAuth } from "../common/hooks";
import { endpoints } from "../common/helpers";
import { Loader } from '../common/components'

const Users = () => {

    const { logout } = useAuth();
    const { data, loading, fetch } = useAxios();
    const navigate = useNavigate();

    const getUsers = () => {
        fetch({ url: endpoints.users.base });
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleDelete = async (userId) => {
        await fetch({
            url: `${endpoints.users.base}/${userId}`,
            method: "DELETE",
        });
        await getUsers();
        alert("Usuario eliminado exitosamente");
    };

    if (loading) return <Loader />

    return (
        <section className="px-40 py-20 w-10/12">
            <div className="flex justify-between gap-10" >
                <h2>Usuarios</h2>
                <button onClick={logout}>[Cerrar Sesión]</button>
            </div>
            <button className=" mt-8" onClick={() => navigate("/user-form/new")}>[+ Crear Usuario]</button>
            {data && data.data && (
                <table className="mt-4">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Tipo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((u) => (
                            <tr key={u._id}>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.type}</td>
                                <td >
                                    <button className="text-sm" onClick={() => navigate(`/user-form/${u._id}`)}>
                                        [Editar]
                                    </button>
                                    <button className="text-sm ml-10" onClick={() => handleDelete(u._id)}>[Eliminar]</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
};

export default Users;
