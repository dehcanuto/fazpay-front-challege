"use client"

import { useState } from "react"
import { SignInResponse, signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

import { FormField } from "@/components/molecules";

const LoginForm = () => {
    const { push } = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data: any) => {
        setLoading(true)
        try {
            setError('')
            await signIn("credentials", {
                ...data,
                redirect: false,
            })
            .then((result?: SignInResponse) => {
                result?.ok ? push("/u") : setError("Acessos inválidos");
            })

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
            <FormField register={register} label="Usuário" name="username" required />
            <FormField register={register} label="Senha" name="password" type="password" required />
            <div className="flex flex-row items-center justify-between mb-5">
                <div className="flex items-center">
                    <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                    <label htmlFor="remember" className="text-gray-600 ml-2">Lembrar acesso</label>
                </div>
                <div className="text-primary-100">
                    <a href="#" className="hover:underline">Esqueceu a senha?</a>
                </div>
            </div>
            <button type="submit" disabled={loading} className="bg-primary-100 hover:bg-primary text-white font-semibold rounded-md py-2 px-4 w-full">
                {loading ? 'Acessando...' : 'Login'}
            </button>
        </form>
    )
}

export default LoginForm;