export async function getAllPosts(page) {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  );
  if (!response.ok) {
    logger.error("Ops, alguma coisa correu mal");
    return [];
  }
  logger.info("Posts obtidos com sucesso");
  return response.json();
}
