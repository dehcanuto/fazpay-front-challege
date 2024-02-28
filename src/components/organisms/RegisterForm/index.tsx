"use client"

import { useState } from "react"
import { SignInResponse, signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

import api from "@/services"
import { FormField } from "@/components/molecules";

const RegisterForm = () => {
    const { push } = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (form: any) => {
        setLoading(true)
        try {
            // Faz o cadastro e executa o login.
            const { data } = await api.post('/register', form);
            if (data.statusCode == 200) {
                // Como nao estamos guardando os dados, usaremos os acessos de login do John Doe.
                setError('')
                await signIn("credentials", {
                    username: 'johndoe',
                    password: '123456',
                    redirect: false,
                })
                .then((result?: SignInResponse) => {
                    result?.ok ? push("/u") : setError("Acessos inválidos");
                })
            }
        } catch (e: any) {
            setError(e)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            {error && <span className="p-3 bg-red-500 text-white text-center rounded-lg">{error}</span>}
            <FormField register={register} label="Nome" name="name" required />
            <FormField register={register} label="Email" name="email" type="email" required />
            <FormField register={register} label="Usuário" name="username" required />
            <FormField register={register} label="Senha" name="password" type="password" required />
            <button type="submit" disabled={loading} className="bg-primary-100 hover:bg-primary text-white font-semibold rounded-md py-3 px-4 mt-4 w-full">
                {loading ? 'Acessando...' : 'Cadastrar'}
            </button>

        </form>
    )
}

export default RegisterForm;