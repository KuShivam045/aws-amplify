import React from "react";
import Head from "next/head";

const LogoSchema = ({ data }) => {
  return (
    <Head>
      <script
        key="product-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default LogoSchema;
