import Head from "next/head";
import ArticlePreview from "./components/ArticlePreview";

export default function Home() {
  return (
    <>
      <Head>
        <title>Article Preview Component</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ArticlePreview />
    </>
  );
}
