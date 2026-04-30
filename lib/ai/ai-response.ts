import callGemini from "./gemini";
import callLiquid from "./liquid";

export default async function generateResponse(prompt: string) {
    try {
        const result = await callGemini(prompt);

        return {
            output: result,
            model: "gemini",
        }
    } catch (err: any) {
        console.warn(err);

        const fallbackResult = await callLiquid(prompt);

        return {
            output: fallbackResult,
            model: "liquid",
        }
    }
}
