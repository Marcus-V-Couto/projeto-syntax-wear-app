import { useState } from "react";
import { z } from "zod";
import { registerUserFormSchema } from "./register-form.schema";

type RegisterFormValues = z.infer<typeof registerUserFormSchema>;

const initialValues: RegisterFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  cpf: "",
  birthDate: new Date(),
  cellphone: "",
};

export const RegisterForm = () => {
  const [values, setValues] = useState<RegisterFormValues>(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterFormValues, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatDateToInput = (date: Date | string) => {
    if (!date) return "";
    const d = date instanceof Date ? date : new Date(date);
    return d.toISOString().slice(0, 10);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "birthDate") {
      setValues((prev) => ({
        ...prev,
        [name]: value ? new Date(value) : new Date(),
      }));
      return;
    }
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const result = registerUserFormSchema.safeParse(values);
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
    <form
      className="text-black flex flex-col gap-3.5"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Nome<span className="text-red-500">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.firstName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="text"
          name="firstName"
          placeholder="Nome"
          value={values.firstName}
          onChange={handleChange}
        />
        {errors.firstName && (
          <p className="text-xs text-red-600">{errors.firstName}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Sobrenome<span className="text-red-500">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.lastName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          value={values.lastName}
          onChange={handleChange}
        />
        {errors.lastName && (
          <p className="text-xs text-red-600">{errors.lastName}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="email"
          name="email"
          placeholder="E-mail"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          CPF<span className="text-red-500">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.cpf ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="text"
          name="cpf"
          placeholder="CPF"
          value={values.cpf}
          onChange={handleChange}
        />
        {errors.cpf && <p className="text-xs text-red-700">{errors.cpf}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Data de nascimento<span className="text-red-500">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.birthDate ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="date"
          name="birthDate"
          placeholder="Data de nascimento"
          value={formatDateToInput(values.birthDate)}
          onChange={handleChange}
        />
        {errors.birthDate && (
          <p className="text-xs text-red-700">{errors.birthDate}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Senha<span className="text-red-500">*</span>
        </label>
        <input
          className={`border rounded-[1px] border-gray-200 w-full text-black p-3 ${errors.password ? "border-red-500" : "border-gray-200"}`}
          type="password"
          name="password"
          placeholder="Senha"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-xs text-red-700">{errors.password}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Confirmar Senha<span className="text-red-500">*</span>
        </label>
        <input
          className={`border rounded-[1px] border-gray-200 w-full text-black p-3 ${errors.confirmPassword ? "border-red-500" : "border-gray-200"}`}
          type="password"
          name="confirmPassword"
          placeholder="Confirmar senha"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-red-700">{errors.confirmPassword}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">
          Telefone Celular<span className="text-red-500">*</span>
        </label>
        <input
          className={`border rounded-xs border-gray-200 w-full text-black px-1 mt-1 focus:outline-none ${errors.cellphone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="tel"
          name="cellphone"
          placeholder="Telefone Celular"
          value={values.cellphone}
          onChange={handleChange}
        />
        {errors.cellphone && (
          <p className="text-xs text-red-700">{errors.cellphone}</p>
        )}
      </div>

      <button
        className="bg-[#5433EB] w-full rounded-[1px] cursor-pointer text-white font-semibold uppercase rounded-md py-3 transition-all hover-bg-[#4028C7] disabled:opacity-50 mt-2 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSubmitting}
      >
        Criar conta
      </button>
    </form>
  );
};

export default RegisterForm;
