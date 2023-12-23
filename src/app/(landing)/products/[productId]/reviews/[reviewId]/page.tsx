import { notFound } from 'next/navigation';

const ReviewDetail = ({
    params,
} : {
    params: { 
        productId: string;
        reviewId: string;
    }
}) => {

    console.log(params)

    if(parseInt(params.reviewId) > 1000){
        notFound();
    }

    return (
        <>
            <h1>Product Review { params.reviewId } </h1>
        </>
    );
};

export default ReviewDetail;
