import Prismic from 'prismic-javascript';
import styled from 'styled-components';
import Head from 'next/head';

const BoxLogo = styled.div``;
const H1 = styled.h1``;
const Image = styled.img``;

import Menu from '../components/menu';
import Card from '../components/cards';
import Footer from '../components/footer';

const Index = (props) => {

  return (
    <div>
      <Head><title>Trufas Hummmm</title></Head>

      <Menu />

      <Card dataCard={props} />

      <Footer />
    </div>
  )
}

export async function getServerSideProps({ res }) {

  const client = Prismic.client('https://getshop.prismic.io/api/v2');
  const products = await client.query(Prismic.Predicates.at('document.type', 'product'));

  return {
    props: {
      data: Date.now(),
      product: products.results
    }
  }
}

export default Index;