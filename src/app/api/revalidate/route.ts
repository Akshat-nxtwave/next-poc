import { revalidatePath } from "next/cache";

const GET = async (): Promise<Response> => {
  revalidatePath("/");
  return new Response(JSON.stringify({ data: "Success!" }));
};

export { GET };
