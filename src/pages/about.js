import MetaHead from "@/component/MetaHead"

export default function About() {
    return (
        <section>
            <MetaHead
                title="About Us"
                description="Halaman About Us"
                image={'http://localhost:3000/logo/nike.svg'}
                url={'http://localhost:3000'}
            />
            <h1>About Us</h1>
        </section>
    )
}