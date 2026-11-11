"use client";

import Script from "next/script";

export default function LeadConnectorChat() {
  return (
    <Script
      id="leadconnector-chat-widget"
      src="https://widgets.leadconnectorhq.com/loader.js"
      strategy="afterInteractive"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6af39d19b488c87e68e58921"
      onError={(error) =>
        console.error("LeadConnector chat widget failed to load:", error)
      }
    />
  );
}
