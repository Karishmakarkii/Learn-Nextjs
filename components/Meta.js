import Head from 'next/head'

function Meta({title, keyword, description}) {
    return (
        <div>
            <Head>
                <meta name = 'viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content={description}/>
                <meta charSet='utf-8'/>
                <link rel='icon' href='./favicon.ico'/>
                <title>{title}</title>

            </Head>
        </div>
    )
}
Meta.defaultProps = {
    title: 'WebDev Newz',
    keyword:'web Development Programming',
    description:'Get the latest news'
}

export default Meta
