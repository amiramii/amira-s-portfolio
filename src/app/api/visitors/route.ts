import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const VISITOR_COUNT_KEY = "amiraSpace:visitor-count";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const visitorId = body?.visitorId;

    if (!visitorId || typeof visitorId !== "string") {
      return Response.json(
        { error: "Invalid visitor ID" },
        { status: 400 }
      );
    }

    // Prevent the same browser from being counted repeatedly.
    const visitorKey = `amiraSpace:visitor:${visitorId}`;

    const isNewVisitor = await redis.set(visitorKey, "1", {
      nx: true,
    });

    if (isNewVisitor) {
      await redis.incr(VISITOR_COUNT_KEY);
    }

    const count = (await redis.get<number>(VISITOR_COUNT_KEY)) ?? 0;

    return Response.json({
      count,
      isNewVisitor: Boolean(isNewVisitor),
    });
  } catch (error) {
    console.error("Visitor counter error:", error);

    return Response.json(
      { error: "Unable to load visitor count" },
      { status: 500 }
    );
  }
}