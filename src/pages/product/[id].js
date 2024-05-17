import MetaHead from "@/component/MetaHead"

export default function ProductDetail() {
    return (
        <section>
            <MetaHead
                title={data.tittle}
                description={data.description}
                image={data.image}
                url={'http://localhost:3000'}
            />

            <h1>{data.title}</h1>
            <div>{data.category}</div>
            <div>{data.price}</div>
            <div><img src={data.image} alt={data.title} width={200} /></div>
            <p>{data.description}</p>
        </section>
    )
}

export async function getServerSideProps(context) {
    const id = context.query.id
    // const {locale, query: {id}} = context
    console.log('id', id)

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()

    return {
        props: { data }
    }
}