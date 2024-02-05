import Experiance from "@/components/Experiance";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import { Header, Subscribe, Footer } from "@/components/common";

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <div className="container lg:py-20 py-8">
          <h1 className="text-center lg:text-left text-2xl font-semibold lg:text-6xl mb-4 xl:text-8xl lg:font-light lg:mb-6">Hello, I&apos;m Dhruvang Gajjar</h1>
          <h2 className="text-center lg:text-left text-lg font-semibold mb-4 lg:text-3xl xl:text-5xl lg:mb-8 leading-tight">A Software Engineer and Mentor.</h2>
          <p className="text-center lg:text-left text-md lg:text-xl text-gray-500 leading-normal">I have started my career as a web developer over 7 years ago, and have collaborated with great individuals to create digital solutions for both corporate and consumer usage. I am quietly confident, naturally curious, and perpetually focusing on improving my skills one challenge at a time.
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
