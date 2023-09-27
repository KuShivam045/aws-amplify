import Html from "next/document";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import jwt from "jwt-simple";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
     
        <meta
          name="google-site-verification"
          content="u54uZFqgNrTkSuahTM5I6bofhv_If1lA4yajPDkIaVg"
        />
         <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/IPassets/rozgaarIcon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/IPassets/rozgaarIcon.png"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-109083878-3"
        ></script>

        <script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-109083878-3', {
              page_path: window.location.pathname,
            });
          `,
          }}
        ></script>

        <script id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-59MGW9H");`,
          }}>
        </script>
        {/* <!-- Start of  Zendesk Widget script -->  */}
        <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=01b31bdb-db26-4eb8-8f56-8968b7ecf179"> </script>
         {/* <!-- End of  Zendesk Widget script -->  */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Organization",
              url: "https://www.rozgaarindia.com/about",
              logo: "https://www.sasone.in/IPassets/rozgaarIcon.png",
            }),
          }}
        />
<noscript dangerouslySetInnerHTML={{
          __html: `<iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-59MGW9H"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe>`}}></noscript>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
export const encodeAndSendToChat = (senderId, recieverId) => {
  var payload = {
    senderId: senderId,
    recieverId: recieverId || "",
    userType: "freelancer",
  };
  var secret = "5wXnlnG7uE";
  var token = jwt.encode(payload, secret);
  window.open(`https://chat.rozgaarindia.com/chat?token=${token}`);
};
export default MyApp;
