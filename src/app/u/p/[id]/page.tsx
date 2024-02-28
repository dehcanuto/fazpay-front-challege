import { ProductForm } from "@/components/organisms";

export default function ProdutoSingle({ params }: { params: { id: number } }) {
    return (
        <div className="container px-6 py-8 mx-auto">
            <ProductForm id={params.id} />
        </div>
    )
}