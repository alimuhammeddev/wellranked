import Script from "next/script";

const FORM_ID = "EcjPSAd4PRl69CrUOInE";
const FORM_NAME = "WellRanked - Free Growth Audit Request Form";

export default function LeadConnectorGrowthAuditForm() {
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        id={`inline-${FORM_ID}`}
        title={FORM_NAME}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={FORM_NAME}
        data-height="925"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        className="block w-full rounded-[20px] border-none"
        style={{ height: "925px" }}
      />
      <Script
        id="leadconnector-form-embed"
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
