export const blog_query = () => {
  const query = `*[_type == "blog" && !(_id in path("drafts.**"))] | order(_createdAt desc)`;
  return query;
};
export const blog_query_by_views = () => {
  const query = `*[_type == "blog" && !(_id in path("drafts.**"))] | order(views desc)[0...3]`;
  return query;
};
export const blog_content_query = (slug: any) => {
  const query = `*[_type == "blog" && !(_id in path("drafts.**")) && url_slug.current == "${slug}"][0]`;
  return query;
};
export const user_query = (id: any) => {
  const query = `*[_type == "user" && !(_id in path("drafts.**")) && _id == "${id}"] | order(_createdAt desc)`;
  return query;
};
export const learn_query = () => {
  const query = `*[_type == "learn" && !(_id in path("drafts.**"))] | order(_createdAt desc)`;
  return query;
};
export const learn_query_by_views = () => {
  const query = `*[_type == "learn" && !(_id in path("drafts.**"))] | order(views desc)[0...3]`;
  return query;
};
export const learn_query_by_importance = () => {
  const query = `*[_type == "learn" && !(_id in path("drafts.**")) && important == "true"]`;
  return query;
};
export const event_query = () => {
  const query = `*[_type == "event" && !(_id in path("drafts.**"))] | order(_createdAt desc)`;
  return query;
};
