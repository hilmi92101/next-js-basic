
const Docs = ({
    params,
}: {
    params: {
        slug: string[];
    }
}) => {

    console.log(params)

    return (

        <>
            <h1>Docs page</h1>

            {params.slug && params.slug?.length === 3 && (
                <>
                    <h1>Slug: {params.slug.join('/')}</h1>
                    <h1>You are in {params.slug[0]} feature page </h1>
                    <h1>You are in {params.slug[1]} concept page </h1>
                    <h1>You are in {params.slug[2]} example page </h1>
                </>
            )}

            {params.slug && params.slug?.length === 2 && (
                <>
                    <h1>Slug: {params.slug.join('/')}</h1>
                    <h1>You are in {params.slug[0]} feature page </h1>
                    <h1>You are in {params.slug[1]} concept page </h1>
                </>
            )}

            {params.slug && params.slug?.length === 1 && (
                <>
                    <h1>Slug: {params.slug.join('/')}</h1>
                    <h1>You are in {params.slug[0]} feature page </h1>
                </>
            )}



        </>
    )
}

export default Docs