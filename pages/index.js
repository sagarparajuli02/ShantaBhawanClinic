import "@fontsource/roboto";
import Head from "next/head";
import NavbarMenu from "../components/NavBar/Navbar";
import HomePage from "../components/Home/Home";
import Info from "../components/Info/Info";
export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <NavbarMenu />

      <HomePage />
      <Info />
    </>
  );
}
