import Link from 'next/link';

const Products = () => {
    // Generate an array of product IDs from 1 to 100
    const productIds = Array.from({ length: 100 }, (_, index) => index + 1);

    return (
        <>
            <Link href='/'>Home</Link><br />

            <h1>Products</h1>

            <ul>
                <li><Link href='/products/101' replace>Product 101</Link></li>

                {productIds.map((productId) => (
                    <li key={productId}>
                        <Link href={`/products/${productId}`}>
                            Product {productId}
                        </Link>
                    </li>
                ))}
            </ul>

            <div style={gapStyle}></div>
        </>
    );
}

const gapStyle: React.CSSProperties = {
    marginBottom: '100px',
};

export default Products;