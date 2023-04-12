import { createTRPCRouter } from "~/server/api/trpc";
import { golferRouter } from "~/server/api/routers/golfer";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  golfer: golferRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
