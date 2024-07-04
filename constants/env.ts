const { env } = process;
export const ENV = {
  TIMBU_BASE_URL: env.TIMBU_BASE_URL ?? "",
  TIMBU_API_KEY: env.TIMBU_API_KEY ?? "",
  TIMBU_APP_ID: env.TIMBU_APP_ID ?? "",
  TIMBU_ORG_ID:env.TIMBU_ORG_ID??""
};
