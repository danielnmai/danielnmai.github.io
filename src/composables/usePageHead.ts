import { useHead } from "@unhead/vue";

const SITE_URL = "https://danielmai.com";

type PageHead = {
  title: string;
  description: string;
  // Route path, e.g. "/contact". Used for the canonical and og:url tags.
  path: string;
  // Use the title as-is instead of appending App.vue's "| Daniel Mai" suffix.
  standalone?: boolean;
};

// Per-page title, description and social tags. Without these every route shares
// App.vue's defaults, and pages with identical titles compete with each other in
// search results.
export const usePageHead = ({
  title,
  description,
  path,
  standalone = false,
}: PageHead) => {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  useHead({
    title,
    ...(standalone ? { titleTemplate: null } : {}),
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
    ],
    link: [{ rel: "canonical", href: url }],
  });
};
