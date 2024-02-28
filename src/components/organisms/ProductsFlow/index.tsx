"use client"

import { useEffect, useState } from "react";

import api from "@/services";
import { ProductPropsType } from "@/types/product";
import { DinamicTable } from "@/components/molecules";

const ProductsFlow = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductPropsType[]>([]);
    
  useEffect(() => {
    async function getMovieArray() {
      const { data } = await api.get('/products');
      setProducts(data.items);
      setLoading(false);
    }
    getMovieArray();
  }, []);

  return (
    <div className="inline-block min-w-full overflow-hidden align-middle rounded-lg">
      <DinamicTable
        path="/u/p/"
        headers={['#', 'Produto', 'Modelo', 'Marca', 'Preço', 'Estoque']}
        rows={products}
        loading={loading}
      />
    </div>
  )
}

export default ProductsFlow;