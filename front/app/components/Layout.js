import Head from "next/head";

//Layoutコンポーネントの作成。全体のlayout。引数にchildren, title
export default function Layout({ children, title = "Unknown Music" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-500">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="items-center w-screen flex-col">
        {children}
      </main>
      <footer className="w-full h-6 flex justify-center items-center text-gray-300 text-base">
        @Unknown Music 2021
      </footer>
    </div>
  );
}