import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = (data) => {
        setUser({ email: data.data.email });

        localStorage.setItem("auth_token", data.token);
        navigate("/");
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        setUser(null);
        navigate("/login");
    };

    return {
        user,
        logout,
        login
    };
};
