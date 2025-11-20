export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTQ2NzExZTM2NzI3OThjYTZiOTljMDVmMGIwOTNmYyIsIm5iZiI6MTc2MzIyNjI0MS44NDE5OTk4LCJzdWIiOiI2OTE4YjI4MTE3N2FkN2RkMjc5YzVjYTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cXksHvK_gs_5_mSMf4kOVa--kWuqKHLg9NmnsaTmmxA'
  }
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w200"


export const toastConfig = {
  position: "top-center",
  gutter: 16,
  toastOptions: {
    duration: 2000,

    // DEFAULT TOAST STYLE
    style: {
      padding: "14px 22px",
      borderRadius: "14px",
      fontSize: "15px",
      fontWeight: 500,
      color: "white",

      // ✨ PREMIUM GLASS EFFECT
      background: "rgba(20, 20, 20, 0.45)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",

      // ✨ CLASSY BORDER AND SHADOWS
      border: "1px solid rgba(255, 255, 255, 0.08)",
      boxShadow:
        "0 8px 25px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.04)",

      letterSpacing: "0.3px",
      maxWidth: "92vw",
    },

    // SUCCESS
    success: {
      iconTheme: {
        primary: "#4ade80", // green glow
        secondary: "#ffffff",
      },
      style: {
        background: "rgba(34,197,94,0.55)",
        border: "1px solid rgba(34,197,94,0.25)",
        boxShadow:
          "0 8px 25px rgba(34,197,94,0.4), inset 0 0 0 1px rgba(255,255,255,0.05)",
      },
    },

    // ERROR
    error: {
      iconTheme: {
        primary: "#ff5b5b",
        secondary: "#ffffff",
      },
      style: {
        background: "rgba(239,68,68,0.55)",
        border: "1px solid rgba(239,68,68,0.25)",
        boxShadow:
          "0 8px 25px rgba(239,68,68,0.4), inset 0 0 0 1px rgba(255,255,255,0.05)",
      },
    },
  },
};
