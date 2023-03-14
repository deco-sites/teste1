import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 604,
  site: "teste1",
  domains: ["teste1.deco.site"],
});