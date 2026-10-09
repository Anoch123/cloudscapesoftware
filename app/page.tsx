import Footer from "@/components/footer";
import Header from "@/components/Header";
import Services from "@/components/services-components/services";

export default function Home() {
  return (
    <section className="relative">
      <Header />
      <Services />
      <div className="relative bg-white px-6 py-12 text-left md:px-10 md:py-16 md:text-center">
        <span className="mx-auto block max-w-3xl text-[30px] font-medium leading-snug text-slate-900 md:text-[48px]">
          Helping ambitious teams turn ideas into products that scale.
        </span>
      </div>
      <Footer />
    </section>
  );
}
