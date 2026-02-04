import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";


export const registerUserFormBaseSchema = z.object({
  firstName: z.string().nonempty("Primeiro Nome Obrigatório"),
  lastName: z.string().nonempty("Segundo Nome Obrigatório"),

  email: z.string().email("Email inválido"),
  password: z
    .string()
    .nonempty("Senha Obrigatória")
    .min(8, "Mínimo de 8 caracteres"),
  confirmPassword: z
    .string()
    .nonempty("Confirmação de Senha Obrigatória")
    .min(8, "Mínimo de 8 caracteres"),
  cpf: z
    .string()
    .nonempty("CPF Obrigatório")
    .refine(isValidCPF, "CPF inválido"),

  birthDate: z.date(),
  cellphone: z.string().nonempty("Telefone Celular Obrigatório"),
});

export const registerUserFormSchema = registerUserFormBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
  }
);

type RegisterUserFormSchema = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RegisterUserFormSchema>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      cpf: "",
      birthDate: new Date(),
      cellphone: "",
    },
    criteriaMode: "all",
  });
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    setError,
    reset,
  };
}
