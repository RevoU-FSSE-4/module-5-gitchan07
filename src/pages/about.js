import MetaHead from "@/component/MetaHead"

export default function About() {
    return (
        <section>
            <MetaHead
                title="About Us"
                description="Halaman About Us"
                image={'http://localhost:3000/logo/nike.svg'}
                url={'http://localhost:3000/about'}
            />
            <h1 className="text-2xl font bold">About Us</h1>
            <p className="py-2">Caramels oat cake cake jelly beans lollipop lollipop jelly fruitcake. Chocolate bar jelly-o sugar plum chocolate cake dessert carrot cake. Cupcake sugar plum dragée cotton candy jelly beans oat cake. Cake cupcake tart toffee soufflé muffin cupcake macaroon. Biscuit tart lemon drops liquorice shortbread powder pudding. Jelly beans sweet roll dragée jelly-o dessert. Biscuit topping soufflé danish sweet cheesecake. Cookie jelly-o muffin carrot cake bonbon. Cake chocolate halvah bear claw lollipop cake donut bonbon bonbon. Donut topping donut sweet roll topping lemon drops marzipan.</p>
            <p className="py-2">Wafer jelly-o cupcake soufflé halvah. Tootsie roll tootsie roll dessert tart jelly beans danish cake. Gummies donut apple pie biscuit tootsie roll toffee cheesecake cookie. Tart croissant liquorice liquorice brownie tiramisu pastry jelly beans icing. Danish tiramisu tootsie roll muffin cookie jelly chocolate cotton candy cheesecake. Sesame snaps brownie apple pie cookie macaroon muffin cake. Tiramisu sweet tart bonbon tart. Jujubes ice cream jelly beans sugar plum fruitcake chocolate donut jelly-o fruitcake. Apple pie soufflé candy gummi bears oat cake bear claw gummi bears cotton candy. Tart caramels fruitcake chupa chups danish danish.</p>
        </section>
    )
}