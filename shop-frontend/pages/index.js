import Prismic from 'prismic-javascript';
import styled from 'styled-components';

const BoxLogo = styled.div``;
const H1 = styled.h1``;
const Image = styled.img``;

import Menu from '../components/menu';
import Card from '../components/cards';

const Index = (props) => {

  return (
    <div>
      <Menu />

      <Card dataCard={props} />
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