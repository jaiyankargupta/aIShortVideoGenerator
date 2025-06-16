/** @type {import('drizzle-kit').Config} */
export default {
  schema: ["./configs/schema.js"],
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-video_owner:npg_GBqOJmFv9UK8@ep-fragrant-wave-a8kk1810-pooler.eastus2.azure.neon.tech/ai-video?sslmode=require",
  },
};
