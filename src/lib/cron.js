import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(process.env.API_URL, (res) => {
      console.log(res.statusCode);
    })
    .on("error", (err) => {
      console.log(err);
    });
});

export default job;
