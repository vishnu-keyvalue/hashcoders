import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";
import SidebarMenu from "@/components/SidebarMenu";

export default function Home() {
  return (
    <>
      <Head>
        <title>HashCoders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="d-flex" style={{marginLeft: 0, paddingLeft: 0}}>
      <SidebarMenu />
      <Container as="main" className="py-4 px-3 mx-auto">
        <Header />
        <h1 className="display-6">Keycode 2023 Submission</h1>
        <TextInput />
        <Footer />
      </Container>
      </Container>
    </>
  );
}
