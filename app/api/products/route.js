export async function GET() {
  const products = [
    { id: 1, name: "Product 1", price: 10, image: "/next.svg" },
    { id: 2, name: "Product 2", price: 15, image: "/vercel.svg" },
    { id: 3, name: "Product 3", price: 20, image: "/window.svg" },
  ];

  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}