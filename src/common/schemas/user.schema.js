import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const userSchema = (isEdit) =>
    yupResolver(
        yup.object({
            name: yup.string().required("El nombre es obligatorio"),
            email: yup
                .string()
                .email("El email no es válido")
                .required("El email es obligatorio"),
            password: isEdit
                ? yup.string().notRequired()
                : yup.string().required("La contraseña es obligatoria"),
            type: yup.string().required("El tipo es obligatorio"),
        })
    );