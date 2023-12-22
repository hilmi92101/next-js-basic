const ProductDetail = ({ 
    params, 
}: { 
    params: { productId: string } 
}) => {
    return (
        <>
            <h1>Product Detail {params.productId} </h1>
        </>
    );
};

export default ProductDetail;
