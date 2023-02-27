import { client } from "@/Components/client";
import { blog_query } from "@/Components/utils/data";

export default async function () {
  const query = blog_query();
  await client.fetch(query).then((data: any) => data);
}
