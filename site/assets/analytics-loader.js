(() => {
  const config = window.VELORA_ANALYTICS_CONFIG || {};
  const gtmContainerId = /^GTM-[A-Z0-9]{5,12}$/.test(String(config.gtmContainerId || "").toUpperCase())
    ? String(config.gtmContainerId).toUpperCase()
    : "";
  const clarityProjectId = /^[a-z0-9]{8,20}$/.test(String(config.clarityProjectId || "").toLowerCase())
    ? String(config.clarityProjectId).toLowerCase()
    : "";

  if (gtmContainerId) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const firstScript = document.getElementsByTagName("script")[0];
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmContainerId)}`;
    firstScript.parentNode.insertBefore(script, firstScript);
  }

  if (clarityProjectId) {
    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
    const firstScript = document.getElementsByTagName("script")[0];
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityProjectId)}`;
    firstScript.parentNode.insertBefore(script, firstScript);
  }
})();
