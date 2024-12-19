import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export const useAxios = () => {
    const navigate = useNavigate();

    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const fetch = async ({ url, method = "GET", data = null }) => {
        const source = axios.CancelToken.source();
        setLoading(true);
        setSuccess(false);
        setError(null);

        const token = localStorage.getItem("auth_token");

        try {
            const response = await axios({
                url: `${API_URL}/${url}`,
                cancelToken: source.token,
                method,
                data: data ? JSON.stringify(data) : {},
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            setResponseData(response.data);
            setSuccess(true);
            setLoading(false);
        } catch (err) {
            if (axios.isCancel(err)) {
                console.log("Solicitud cancelada:", err.message);
            } else {
                if (err.response) {
                    const errorMessage =
                        err.response.data.message || "Error en el servidor...";
                    setError(errorMessage);
                }
                if (err.response && err.response.status === 401) {
                    alert("Sesión expirada. Redirigiendo al login...");
                    navigate("/login");
                }
            }
        } finally {
            setLoading(false);
        }
        return () => source.cancel("Solicitud cancelada");
    }

    return { data: responseData, loading, success, error, fetch };
};
