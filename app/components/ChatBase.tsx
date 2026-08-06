"use client";

import Script from "next/script";

export default function ChatBase() {
  return (
    <Script
      id="chatbase-init"
      strategy="afterInteractive"
      onError={(e) => console.error("Chatbase script failed to load:", e)}
    >
      {`
        (function(){
          if(!window.chatbase || window.chatbase("getState") !== "initialized") {
            window.chatbase = (...arguments) => {
              if(!window.chatbase.q) {
                window.chatbase.q = [];
              }
              window.chatbase.q.push(arguments);
            };

            window.chatbase = new Proxy(window.chatbase, {
              get(target, prop) {
                if(prop === "q") {
                  return target.q;
                }
                return (...args) => target(prop, ...args);
              }
            });
          }

          const onLoad = function() {
            if (document.getElementById("vSWEoaDXOIqvvUs8TKjDF")) return; // avoid double-injection

            const script = document.createElement("script");
            script.src = "https://www.chatbase.co/embed.min.js";
            script.id = "vSWEoaDXOIqvvUs8TKjDF";
            script.setAttribute("domain", "www.chatbase.co");
            document.body.appendChild(script);
          };

          if (document.readyState === "complete") {
            onLoad();
          } else {
            window.addEventListener("load", onLoad);
          }
        })();
      `}
    </Script>
  );
}
