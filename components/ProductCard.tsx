import React from 'react';

type Product = {
    title: string;
    price: number;
    imageUrl: string;
    affiliateUrl: string;
    category: string;
};

type Props = {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    console.log(product.imageUrl);
    return (
        <div
        style={{
            border: '1px solid #ccc',
            borderRadius: 8,
            padding: 20,
            width: 300,
            margin: '20px auto',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
        >
        <img
            src={product.imageUrl}
            alt={product.title}
            style={{ width: '100%', borderRadius: 4 }}
        />
        <h2 style={{ margin: '10px 0' }}>{product.title}</h2>
        <p style={{ fontWeight: 'bold', marginBottom: 10 }}>${product.price.toFixed(2)}</p>
        <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: '#FF9900',
            color: 'white',
            borderRadius: 4,
            textDecoration: 'none',
            }}
        >
            View on Amazon
        </a>
        </div>
    );
};

export default ProductCard;
