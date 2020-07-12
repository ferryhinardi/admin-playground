import server from "./server";
import { config } from "./config/app";

const port = process.env.PORT || "4000";

server.listen(
  {
    port,
  },
  () => {
    console.log(`Server is running on ${config.API_URL}`);
  }
);
