const keys = require("./keys");
const { createClient } = require("redis");

const redisClient = createClient({
  url: `redis://${keys.redisHost}:${keys.redisPort}`,
});

const sub = redisClient.duplicate();

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}

(async () => {
  try {
    // Connect the main Redis client and subscriber client
    await redisClient.connect();
    await sub.connect();

    // Subscribe to the "insert" channel and handle messages
    sub.subscribe("insert", async (message) => {
      const fibValue = fib(parseInt(message));
      await redisClient.hSet("values", message, fibValue);
    });

    console.log("Redis clients connected and subscribed successfully.");
  } catch (err) {
    console.error("Error connecting to Redis:", err);
  }
})();
