import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  // maintain LRU of recency to ensure at least (size of products) spins between repeats
  const [availableIndices, setAvailableIndices] = useState<number[]>(() => {
    return Array.from({ length: products.length }, (_, i) => i);
  });

  const handleSpin = () => {
    let pool = [...availableIndices];

    const randomIdxInPool = Math.floor(Math.random() * pool.length);
    const productIdx = pool[randomIdxInPool]!;

    const lastIdx = pool.length! - 1;
    [pool[randomIdxInPool], pool[lastIdx]] = [pool[lastIdx]!, pool[randomIdxInPool]!];
    pool = pool.slice(0, lastIdx);

    if (pool.length == 0) {
      pool = new Array(products.length - 1);
      let j = 0;
      for (let i = 0; i < products.length; i++) {
        if (i !== productIdx) {
          pool[j] = i;
          j++;
        }
      }
    }

    setSelectedProduct(products[productIdx]!);
    setAvailableIndices(pool);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Random Gift Generator</h1>
      <button
        onClick={handleSpin}
        style={{
          margin: 20,
          padding: '10px 20px',
          fontSize: 16,
          cursor: 'pointer',
          borderRadius: 6,
          backgroundColor: '#FF9900',
          color: 'white',
          border: 'none',
        }}
      >
        Spin the Wheel!
      </button>

      {selectedProduct && <ProductCard product={selectedProduct} />}
    </div>
  );
}

// export default function TestPage() {
//   return (
//     <div style={{ textAlign: 'center', marginTop: 50 }}>
//       <h1>Test Product Card</h1>
//       <ProductCard product={products[0]!} />
//     </div>
//   );
// }