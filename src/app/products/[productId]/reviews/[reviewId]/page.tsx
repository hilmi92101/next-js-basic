const ReviewDetail = ({
    params,
} : {
    params: { 
        productId: string;
        reviewId: string;
    }
}) => {

    console.log(params)
    return (
        <>
            <h1>Product Review { params.reviewId } </h1>
        </>
    );
};

export default ReviewDetail;
