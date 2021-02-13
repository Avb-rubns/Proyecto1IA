import Head from 'next/head'

export default function Template(props)
{
    return (
        <>
          <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
        {
            props.children
        }
        </>
    )
}