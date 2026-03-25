import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6";
const BASE_URL = "https://forever-consultants.vercel.app";

// All URLs to submit for indexing
const ALL_URLS = [
  "/",
  "/about",
  "/contact",
  "/services/lic",
  "/services/mutual-funds",
  "/services/health",
  "/vcard/nitin-gandhi",
  "/vcard/sujata-gandhi",
];

/**
 * GET /api/indexnow — Manually trigger IndexNow submission to all supported engines
 */
export async function GET(request: NextRequest) {
  const urlList = ALL_URLS.map((path) => `${BASE_URL}${path}`);

  const payload = {
    host: "forever-consultants.vercel.app",
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  const engines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ];

  const results: { engine: string; status: number | string }[] = [];

  for (const engine of engines) {
    try {
      const response = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      results.push({ engine, status: response.status });
    } catch (error: any) {
      results.push({ engine, status: `Error: ${error.message}` });
    }
  }

  return NextResponse.json({
    success: true,
    submitted: urlList.length,
    urls: urlList,
    results,
    timestamp: new Date().toISOString(),
  });
}
