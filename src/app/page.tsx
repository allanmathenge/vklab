
import Nav from "./components/nav/Nav";
import Results from "./components/Hero/Results";
// import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className="">
      {/* <Logo /> */}
      <section className="max-w-[1080px] mx-auto">
        <Nav />
        <Results />
      </section>
    </main>
  );
}
