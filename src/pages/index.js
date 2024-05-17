import MetaHead from "@/component/MetaHead";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchProduct = async () => {
    setIsLoading(true)

    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    setProduct(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  if (isLoading) return 'Loading...'

  return (
    <>
      <MetaHead
        title="Home"
        description="Halaman utama"
        image="/logo/nike.svg"
        url="/"
      />

      <section className="product-list">
        {product.map((value) => (
          <div className="item" key={product.id}>
            <div className="image">
              <img src={value.image} alt={value.title} width={200} />
            </div>
            <div className="info">
              <h2>{value.title}</h2>
              <link href={`/product/${value.id}`}>Selengkapnya</link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
