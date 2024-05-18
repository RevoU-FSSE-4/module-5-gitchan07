import MetaHead from "@/component/MetaHead";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchProduct = async () => {
    setIsLoading(true)

    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    setProducts(data)
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
        image="http://localhost:3000/logo/nike.svg"
        url="http://localhost:3000"
      />

      <section>
        {products && products.map((value) => (
          <Link key={value.id} href={`/product/${value.id}`} class="flex flex-col items-center mb-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={value.image} alt={value.title} />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.description}</p>
            </div>
          </Link>))}
      </section>
    </>
  )
}




