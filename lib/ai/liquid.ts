import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

export default async function callLiquid(prompt: string) {
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

    if (!OPENROUTER_API_KEY) {
        throw new Error("Missing OpenRouter API Key");
    }

    try {
        const openrouter = createOpenRouter({
            apiKey: OPENROUTER_API_KEY,
        })

        const response = streamText({
            model: openrouter("liquid/lfm-2.5-1.2b-instruct:free"),
            prompt: prompt,
        });

        await response.consumeStream();
        return response.text ?? "";


    } catch (err: any) {
        console.error(`LiquidAI error: ${err}`);
        throw err;
    }
}
