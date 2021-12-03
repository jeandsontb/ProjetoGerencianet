import Prismic from 'prismic-javascript';
import styled from 'styled-components';

const BoxLogo = styled.div``;
const H1 = styled.h1``;
const Image = styled.img``;

import Card from '../components/cards';

const Index = (props) => {

  return (
    <div>
      <h1><img src="/trufas.png" alt="Trufa Shop" /></h1>
      <p>Esse é um projeto top</p>

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