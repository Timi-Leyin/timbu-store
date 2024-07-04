const { env } = process;
export const ENV = {
  TIMBU_BASE_URL: env.TIMBU_BASE_URL ?? "",
};
