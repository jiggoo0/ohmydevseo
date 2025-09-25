export async function GET() {
  return new Response(JSON.stringify({ message: "Hello SPA Next.js!" }), {
    headers: { "Content-Type": "application/json" }
  });
}