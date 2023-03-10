import Head from "next/head";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import { GetServerSidePropsContext } from "next/types";
import requests, {baseUrl} from "@/utils/requests";
import { SEARCH_RESULT } from "../types/Movie";

export default function Home({ results }: SEARCH_RESULT): JSX.Element {
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results results={results} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const genre = context.query.genre;
  const request = await fetch(
    baseUrl+(genre && `${requests[genre as keyof typeof requests]?.url}` ||
      `${requests.fetchTrending.url}`)
  );
  const { results }: SEARCH_RESULT = await request.json();

  return {
    props: {
      results,
    },
  };
}
