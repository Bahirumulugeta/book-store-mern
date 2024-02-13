import app from "./server";
import pgDB from "./db";
import http from "http";
export default () => {   
  const server = http.createServer(app);

  const port = (process.env.PORT as unknown as number) || 3000;

  server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });

  process.on("SIGINT", () => {
    server.close(() => {
      console.log("App closing");
      pgDB.end(() => {
        console.log(`DB is closing`);
      });
    });
  });
};

