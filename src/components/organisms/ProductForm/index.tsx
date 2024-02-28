"use client"

import { useEffect, useState } from "react"
import { useForm, useWatch } from "react-hook-form"

import api from "@/services"
import { AlertNotification, FormField } from "@/components/molecules";
import { AlertNotificationPropsType } from "@/components/molecules/AlertNotification/type";

const ProductForm = ({ id }: { id: number }) => {
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const [alert, setAlert] = useState<AlertNotificationPropsType>({
        message: '',
        status: 'success',
        active: false
    });

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm();
    const title = useWatch({ control, name: 'title' });

    const onSubmit = async (form: any) => {
        setSending(true)
        try {
            setAlert({...alert, active: false})
            await api.post(`/products/${id}`, form);
            setSending(false);
            setAlert({ message: 'Produto atualizado!', status: 'success', active: true })
        } catch (e: any) {
            setAlert({ message: e.message, status: 'error', active: true })
        }
        finally {
            setSending(false)
        }
    }

    useEffect(() => {
        async function getMovieArray() {
          const { data } = await api.get(`/products/${id}`);
          const { title, model, brand, price } = data.item;

          setValue("title", title);
          setValue("model", model);
          setValue("brand", brand);
          setValue("price", price);

          setLoading(false);
        }
        getMovieArray();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between">
                <h3 className="text-3xl font-semibold text-gray-600 mb-4">
                    {title ?? 'Carregando...'}
                </h3>
                <button type="submit" disabled={sending} className="py-2 px-4 bg-primary-100 hover:bg-primary text-white font-semibold rounded-md">
                    {sending ? 'Salvando...' : 'Salvar'}
                </button>
            </div>
            <div className="relative p-4 bg-white rounded-lg">
                {loading ? (
                    <span className="flex items-center justify-center p-8 text-gray-900 text-center">
                        Carregando...
                    </span>
                    ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
                        <FormField register={register} label="Nome do produto" name="title" required />
                        <FormField register={register} label="Modelo" name="model" required />
                        <FormField register={register} label="Marca" name="brand" required />
                        <FormField register={register} label="Preço" name="price" required />
                    </div>
                )}
            </div>
            <AlertNotification {...alert} />
        </form>
    )
}

export default ProductForm;
