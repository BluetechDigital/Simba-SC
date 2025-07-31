import Script from 'next/script';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

declare global {
  interface Window {
    /**
     * Google Tag Manager gtag function.
     * @param {string} command - The command to execute (e.g., 'config', 'event').
     * @param {...any[]} args - Arguments for the command.
     */
    dataLayer: any[];
  }
}

const GoogleTagManager = () => {
    if (!GTM_ID) {
      console.warn("Google Tag Manager ID is not set. GTM will not function.");
      return null;
    }

    // This component is a Server Component. It only renders the script tag.
    return (
      <Script
        id="gtm-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    );
};

export const GoogleTagManagerNoScript = () => {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
    if (!GTM_ID) return null;
    
    return (
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
    );
}

export default GoogleTagManager;