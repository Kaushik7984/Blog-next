import Hero from "@/components/home-page/hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Max' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <div>
        <h1>Home</h1>
        <Hero />
      </div>
    </>
  );
}
