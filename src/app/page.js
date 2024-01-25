import Experiance from "@/components/Experiance";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import { Header, Subscribe, Footer } from "@/components/common";

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <div className="container py-20">
          <h1 className="text-8xl font-light leading-tight mb-6">Hello, I&apos;m Dhruvang Gajjar</h1>
          <h2 className="text-5xl leading-tight mb-8">A Software Engineer and Mentor.</h2>
          <p className="text-gray-500 text-xl leading-normal">I have started my career as a web developer over 7 years ago, and have collaborated with great individuals to create digital solutions for both corporate and consumer usage. I am quietly confident, naturally curious, and perpetually focusing on improving my skills one challenge at a time.
          </p>
        </div>
      </section>
      <Experiance />
      <Subscribe />
      <Projects />
      <Testimonial />
      <Footer />
    </main >
  );
}
