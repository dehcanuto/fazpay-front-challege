import { ProductsFlow } from "@/components/organisms";

export default function Dashboard() {
    return (
        <div className="container px-6 py-8 mx-auto">
            <h3 className="text-3xl font-semibold text-gray-600 mb-4">
                Produtos
            </h3>
            <ProductsFlow />
        </div>
    )
}