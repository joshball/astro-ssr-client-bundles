import type { APIRoute } from "astro";
import { getRockets } from "../../lib/rockets";



export const get: APIRoute = async ({ request, params, redirect }) => {
  const rockets = await getRockets();

  return new Response(
    JSON.stringify(rockets),
    { status: 200 }
  );
};
