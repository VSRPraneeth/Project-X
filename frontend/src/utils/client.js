import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import config from "../config";

export const client = sanityClient({
  projectId: config.sanity.ProjectId,
  dataset: "production",
  apiVersion: "2022-01-05",
  useCdn: true,
  token: config.sanity.Token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
