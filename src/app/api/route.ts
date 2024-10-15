const GET = async (req: Request): Promise<Response> => {
  const { searchParams } = new URL(req.url);

  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + searchParams.get("number")
  ).then((d) => d.json());

  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  });
};

export { GET };
