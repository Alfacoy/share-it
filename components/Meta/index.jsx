import Head from "next/head";

const Meta = ({ img, title, title_social, description, user }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={description} />
    {/* Twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={`@${user}`} />
    <meta name="twitter:title" content={title_social} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={img} />
    {/* Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title_social} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={img} />
  </Head>
);

export default Meta;
