import { Metadata } from 'next';

type Props = {
    params: {
        productId: string
    }
}

// export const generateMetadata = ({ params }: Props): Metadata => {
//     return {
//         title: `Product ${params.productId}`,
//         description: `Product ${params.productId} is a very good item.`,
//     };
// };

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) =>
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`);
        }, 100)
    );

    return {
        title: `Product ${title}`,
    };
};


const ProductDetail = ({ params }: Props) => {
    return (
        <>
            <h1>Product Detail {params.productId} </h1>
        </>
    );
};

export default ProductDetail;
