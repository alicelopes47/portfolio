import { cache } from 'react';
const dedupedFetch = cache(async (serializedInit:any) => {
  const response = await fetch("https://graphql.datocms.com/", JSON.parse(serializedInit));
  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);
  }
  return responseBody;
})

interface PerformRequestProps {
    query: string;
    variables?: Record<string, any>;
    includeDrafts?: boolean;
    excludeInvalid?: boolean;
    visualEditingBaseUrl?: string;
    revalidate?: boolean;
    }

export async function performRequest({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl,
  revalidate,
 }: PerformRequestProps) {
  const { data } = await dedupedFetch(JSON.stringify({
    method: "POST",
    headers: {
      Authorization: `Bearer ffbe7cd1dd55ee131ba7e6b2b41039`,
      ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
      ...(excludeInvalid ? { "X-Exclude-Invalid": "true" } : {}),
      ...(visualEditingBaseUrl ? { "X-Visual-Editing": "vercel-v1", "X-Base-Editing-Url": visualEditingBaseUrl } : {}),
      ...(process.env.NEXT_DATOCMS_ENVIRONMENT ? { "X-Environment": process.env.NEXT_DATOCMS_ENVIRONMENT } : {}),
    },
    body: JSON.stringify({ query, variables, revalidate }),
    next: { revalidate },
  }));
  return data;
}
