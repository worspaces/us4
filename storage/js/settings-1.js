const beforeUnloadEnabled = localStorage.getItem('beforeUnloadEnabled') === 'true';
if (beforeUnloadEnabled) {
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
    });
}

const savedTitle = localStorage.getItem('siteTitle');
if (savedTitle) {
    document.title = savedTitle;
}

const savedLogo = localStorage.getItem('siteLogo');
if (savedLogo) {
    const logoElement = document.querySelector('link[rel="icon"]'); 
    if (logoElement) {
        logoElement.href = savedLogo;
    }
}

const panicKey = localStorage.getItem('panicKey');
const panicUrl = localStorage.getItem('panicUrl');
if (panicKey && panicUrl) {
    window.addEventListener('keydown', function (event) {
        if (event.key === panicKey) {
            window.location.href = panicUrl;
        }
    });
}

let inFrame;

try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}

if (
  !inFrame &&
  !navigator.userAgent.includes("Firefox") &&
  localStorage.getItem("autocloakEnabled") === "true"
) {
  const popup = open("about:blank", "_blank");
  if (!popup || popup.closed) {
    alert(
      "Please allow popups for this site. Doing so will allow us to open the site in an about:blank tab and prevent this site from showing up in your history. You can turn this off in the site settings."
    );
  } else {
    const siteTitle = localStorage.getItem('siteTitle') || "Home";
    const siteLogo = localStorage.getItem('siteLogo') || "https://raw.githubusercontent.com/voucan/voucan.github.io/refs/heads/main/googleclassroom.png";

    popup.document.title = siteTitle;

    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = siteLogo;
    popup.document.head.appendChild(favicon);

    const iframe = document.createElement('iframe');
    iframe.src = '/';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.border = 'none';
    popup.document.body.style.margin = '0';
    popup.document.body.appendChild(iframe);

    const panicUrl = localStorage.getItem('panicUrl') || "https://classroom.google.com";
    window.location.href = panicUrl;
  }
}
