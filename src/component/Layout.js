import Footer from "@/component/Footer";
import Header from "@/component/Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="max-w-screen-xl mx-auto p-4">
                {children}
            </main>
            <Footer />
        </>
    )
}