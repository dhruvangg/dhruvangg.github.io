
const CONTENTFUL_SPACE_ID="4lqqjda181tr"
const CONTENTFUL_ACCESS_TOKEN="kMrTj6uKdzP-fJvpa7U2GmB0utKnNDmxyj7ATY88nsg"
const CONTENTFUL_PREVIEW_ACCESS_TOKEN="yu5pynoXrBRQiBD-HYgFVaZSNBda6Ss0qafhYNLrZDk"

const ARTICLE_GRAPHQL_FIELDS = `
title
url
sys {
  id
  publishedAt
}
excerpt
body {
  json
}
image {
  title
  description
  contentType
  fileName
  size
  url
  width
  height
}
contentfulMetadata {
  tags {
    id
  }
}
`;

async function fetchGraphQL(query, preview = false) {
  console.log('CONTENTFUL_SPACE_ID', CONTENTFUL_SPACE_ID);
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${preview
          ? CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["articles"] },
    }
  ).then((response) => response.json()).catch(error => console.log(error))
}

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.articlesCollection?.items;
}

export async function getAllArticles(
  // For this demo set the default limit to always return 3 articles.
  limit = 3,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const articles = await fetchGraphQL(
    `query {
      articlesCollection(where:{url_exists: true}, limit: ${limit}, preview: ${isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  console.log('articles', articles);
  return extractArticleEntries(articles);
}

export async function getArticle(slug, isDraftMode = false) {
  const article = await fetchGraphQL(
    `query {
          articlesCollection(where:{url: "${slug}"}, limit: 1, preview: ${isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(article)[0];
}