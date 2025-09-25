import { products } from "../../data/products";

export async function GET() {
  try {
    if (!products || !Array.isArray(products)) {
      return new Response(
        JSON.stringify({ error: "Products data not available" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch products", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}