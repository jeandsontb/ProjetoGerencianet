import Prismic from 'prismic-javascript';

const Index = (props) => {

  const produc = [1,2,3,4,5,6,7];

  return (
    <div>
      <h1>Dev-Shop</h1>
      <p>Esse é um projeto top</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>

      
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