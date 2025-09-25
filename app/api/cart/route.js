let cartItems = [];

export async function GET() {
  return new Response(JSON.stringify(cartItems), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  const product = await req.json();
  const existing = cartItems.find((p) => p.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  return new Response(JSON.stringify(cartItems), {
    headers: { "Content-Type": "application/json" },
  });
}