export function getURL() {
    let url =
        process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
        process?.env?.VERCEL_URL ?? // Automatically set by Vercel.
        window?.location?.origin ??        
        "http://localhost:3000/";

    // Make sure to include `https://` when not localhost.
    url = url.includes("http") ? url : `https://${url}`;

    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;

    return url;
}

export async function sleep(milliSecond: number) {
    await new Promise(res => setTimeout(
        () => res('')
        , milliSecond))
}

export function toLocalTime(UTCTime: string) {
    let UTCTimeObj = new Date(UTCTime);
    return UTCTimeObj.toLocaleString()
}