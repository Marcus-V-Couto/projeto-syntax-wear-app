import { useState, useMemo } from "react";
import { z } from "zod";
import {
  registerUserFormBaseSchema,
  registerUserFormSchema,
} from "./register-form.schema";

type RegisterFormValues = z.infer<typeof registerUserFormSchema>;

const initialValues: Omit<RegisterFormValues, 'birthDate'> & { birthDate: string } = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  cpf: "",
  birthDate: "",
  cellphone: "",
};

export const RegisterForm = () => {
  const [values, setValues] = useState<Omit<RegisterFormValues, 'birthDate'> & { birthDate: string | Date }>(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterFormValues, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fieldSchemas = useMemo(
    () => ({
      firstName: registerUserFormBaseSchema.pick({ firstName: true }),
      lastName: registerUserFormBaseSchema.pick({ lastName: true }),
      email: registerUserFormBaseSchema.pick({ email: true }),
      password: registerUserFormBaseSchema.pick({ password: true }),
      confirmPassword: registerUserFormBaseSchema.pick({ confirmPassword: true }),
      cpf: registerUserFormBaseSchema.pick({ cpf: true }),
      birthDate: registerUserFormBaseSchema.pick({ birthDate: true }),
      cellphone: registerUserFormBaseSchema.pick({ cellphone: true }),
    }),
    []
  );

  const formatDateToInput = (date: Date | string) => {
    if (!date) return "";
    const d = date instanceof Date ? date : new Date(date);
    if (isNaN(d.getTime())) return "";
    return d.toISOString().slice(0, 10);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Limpa o erro do campo atual quando o usuário começa a digitar
    if (errors[name as keyof RegisterFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (name === "birthDate") {
      setValues((prev) => ({
        ...prev,
        [name]: value || "",
      }));
      return;
    }
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const fieldName = name as keyof RegisterFormValues;
    let fieldValue = values[fieldName];
    
    // Converte string de data para Date se necessário
    if (fieldName === "birthDate" && typeof fieldValue === "string" && fieldValue) {
      fieldValue = new Date(fieldValue);
    }
    
    const fieldSchema = fieldSchemas[fieldName];
    const result = fieldSchema.safeParse({ [fieldName]: fieldValue });
    
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(prev => ({ ...prev, [fieldName]: fieldErrors[fieldName as keyof typeof fieldErrors]?.[0] }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Converte birthDate para Date se for string
    const submitValues = {
      ...values,
      birthDate: typeof values.birthDate === "string" && values.birthDate 
        ? new Date(values.birthDate) 
        : values.birthDate
    };
    
    const result = registerUserFormSchema.safeParse(submitValues);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        firstName: fieldErrors.firstName?.[0],
        lastName: fieldErrors.lastName?.[0],
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
        confirmPassword: fieldErrors.confirmPassword?.[0],
        cpf: fieldErrors.cpf?.[0],
        birthDate: fieldErrors.birthDate?.[0],
        cellphone: fieldErrors.cellphone?.[0],
      });
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <form className="text-black flex flex-col gap-3.5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Nome<span className="text-error">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.firstName ? "border-error focus:ring-error" : "border-border focus:ring-accent"}`}
          type="text"
          name="firstName"
          placeholder="Nome"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.firstName && (
          <p className="text-xs text-error">{errors.firstName}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Sobrenome<span className="text-error">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.lastName ? "border-error focus:ring-error" : "border-border focus:ring-accent"}`}
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.lastName && (
          <p className="text-xs text-error">{errors.lastName}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          E-mail<span className="text-error">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.email ? "border-error focus:ring-error" : "border-border focus:ring-accent"}`}
          type="email"
          name="email"
          placeholder="E-mail"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className="text-xs text-error">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          CPF<span className="text-error">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.cpf ? "border-error focus:ring-error" : "border-border focus:ring-accent"}`}
          type="text"
          name="cpf"
          placeholder="CPF"
          value={values.cpf}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.cpf && <p className="text-xs text-error">{errors.cpf}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Data de nascimento<span className="text-error">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.birthDate ? "border-error focus:ring-error" : "border-border focus:ring-accent"}`}
          type="date"
          name="birthDate"
          placeholder="Data de nascimento"
          value={typeof values.birthDate === "string" ? values.birthDate : formatDateToInput(values.birthDate)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.birthDate && (
          <p className="text-xs text-error">{errors.birthDate}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Senha<span className="text-error">*</span>
        </label>
        <input
          className={`border rounded-[1px] border-gray-200 w-full text-black p-3 ${errors.password ? "border-error" : "border-gray-200"}`}
          type="password"
          name="password"
          placeholder="Senha"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && (
          <p className="text-xs text-error">{errors.password}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Confirmar Senha<span className="text-error">*</span>
        </label>
        <input
          className={`border rounded-[1px] border-gray-200 w-full text-black p-3 ${errors.confirmPassword ? "border-error" : "border-gray-200"}`}
          type="password"
          name="confirmPassword"
          placeholder="Confirmar senha"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-error">{errors.confirmPassword}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Telefone Celular<span className="text-error">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.cellphone ? "border-error focus:ring-error" : "border-border focus:ring-accent"}`}
          type="tel"
          name="cellphone"
          placeholder="Telefone Celular"
          value={values.cellphone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.cellphone && (
          <p className="text-xs text-error">{errors.cellphone}</p>
        )}
      </div>

      <button
        className="bg-accent w-full rounded-[1px] cursor-pointer text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-accent-hover disabled:opacity-50 mt-2 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSubmitting}
      >
        Criar conta
      </button>
    </form>
  );
};

export default RegisterForm;
