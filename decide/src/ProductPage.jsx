import * as React from 'react';
import VariantOption from './components/VariantOption';
import data from './data/db.json';
import { src, srcset } from './js/utils';
import './css/index.css';

const Header = window.getComponent('explore/Header');
const Footer = window.getComponent('explore/Footer');
const Recommendations = window.getComponent('explore/Recommendations');
const AddToCart = window.getComponent('checkout/AddToCart');

function useSku() {
  const [sku, setSku] = React.useState(() => new URL(location.href).searchParams.get('sku'));

  return [
    sku,
    (val) => {
      history.replaceState(null, null, `?sku=${val}`);
      setSku(val);
    },
  ];
}

const ProductPage = ({ id }) => {
  const [sku, setSku] = useSku();
  const { name, variants, highlights = [] } = data.products.find((p) => p.id === id);
  const variant = variants.find((v) => v.sku === sku) || variants[0];

  const handleSkuSelect = (ev) => {
    const attr = ev.target.getAttribute('href');

    if (attr) {
      const val = attr.substring(attr.indexOf('?sku=') + 5);
      setSku(val);
    }
  };

  return (
    <div data-boundary-page="decide">
      <Header />
      <main className="d_ProductPage">
        <div className="d_ProductPage__details">
          <img
            className="d_ProductPage__productImage"
            src={src(variant.image, 400)}
            srcSet={srcset(variant.image, [400, 800])}
            sizes="400px"
            width="400"
            height="400"
            alt={`${name} - ${variant.name}`}
          />
          <div className="d_ProductPage__productInformation">
            <h2 className="d_ProductPage__title">{name}</h2>
            <ul className="d_ProductPage__highlights">
              {highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
            <ul className="d_ProductPage__variants" onClick={handleSkuSelect}>
              {variants.map((v, i) => (
                <VariantOption key={i} {...{ ...v, selected: v.sku === variant.sku }} />
              ))}
            </ul>
            <AddToCart sku={variant.sku} />
          </div>
        </div>
        <Recommendations skus={[variant.sku]} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
