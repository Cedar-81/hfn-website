import { createClient } from "next-sanity";
import { useNextSanityImage } from "next-sanity-image";

export const client = createClient({
  projectId: "hijb6t3b",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export const imageProps = (data: any) => useNextSanityImage(client, data.image);
