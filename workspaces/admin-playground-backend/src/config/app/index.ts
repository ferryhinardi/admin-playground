import * as test from "./index.testing";
import * as development from "./index.development";
import * as staging from "./index.staging";
import * as production from "./index.production";

type BaseConfig = {
  API_HOST: string;
  API_PORT: string;
  API_URL: string;
};

export const config: BaseConfig = {
  test,
  development,
  staging,
  production,
}[process.env.NODE_ENV || "development"];

export default config;
