// eslint-disable-next-line import/prefer-default-export
export function getLastHashFromUrl(url) {
  try {
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname;
    const segments = pathname.split("/").filter(segment => segment !== "");
    return segments.length > 0 ? segments[segments.length - 1] : null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Invalid URL:", error);
    return null;
  }
}

export function getImages(row, shouldAppendLastHash = true) {
  const images = [];
  let url = '';

  if (row["1mScreenshot"]) {
    url = shouldAppendLastHash ? getLastHashFromUrl(row["1mScreenshot"]) : row["1mScreenshot"];
    images.push({ label: "1m", url });
  }
  if (row["3mScreenshot"]) {
    url = shouldAppendLastHash ? getLastHashFromUrl(row["3mScreenshot"]) : row["3mScreenshot"];
    images.push({ label: "3m", url });
  }
  if (row["15mScreenshot"]) {
    url = shouldAppendLastHash ? getLastHashFromUrl(row["15mScreenshot"]) : row["15mScreenshot"];
    images.push({ label: "15m", url });
  }
  return images;
}

export function getCurrentMonth() {
  const date = new Date();
  const month = date.getMonth();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[month];
}
