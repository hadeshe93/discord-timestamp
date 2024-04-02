export async function insertScript(url: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
    script.onload = resolve;
    script.onerror = (err) => {
      document.head.removeChild(script);
      reject(err);
    };
  });
}