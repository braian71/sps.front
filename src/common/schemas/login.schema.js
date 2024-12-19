import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const loginSchema = yupResolver(yup.object().shape({
    email: yup
        .string()
        .email("Correo electrónico no válido")
        .required("El correo electrónico es obligatorio"),
    password: yup
        .string()
        .min(2, "La contraseña debe tener al menos 6 caracteres")
        .required("La contraseña es obligatoria"),
}));
