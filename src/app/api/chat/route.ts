import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";
console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE,
});

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: messages,
      max_tokens: 100,
      stream: true,
    });

    const stream = await OpenAIStream(response);
    return new  StreamingTextResponse(stream);
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error accordingly, maybe return an error response
    return new Response("An error occurred", { status: 500 });
  }
}
