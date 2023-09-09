import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/states/atom";

export default function Username() {
  const username = useRecoilValue(userNameState);
  return (
    <>
      <Head>
        <title>Username</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as="main" className="py-4 px-3 mx-auto">
        <Header />
        <h1 className="display-6">{`User name is ${username}`}</h1>
        <Footer />
      </Container>
    </>
  );
}
