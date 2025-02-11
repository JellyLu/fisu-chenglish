import { deepseek, createDeepSeek } from "@ai-sdk/deepseek";
import { generateText } from "ai";

const deepseek = createDeepSeek({
  apiKey: "sk-221d970127f942389d2301dcdfce84da",
});

// const openai = new OpenAI({
//   baseURL: 'https://api.deepseek.com',
//   apiKey: ,
//   dangerouslyAllowBrowser: true,
// });


export const sendSingleMsg = async (prompt: string) => {

  const result = await generateText({
    model: deepseek('deepseek-chat'),
    prompt,
  });

  // const completion = await openai.chat.completions.create({
  //   messages: [{ role: "system", content: prompt }],
  //   model: "deepseek-chat",
  // });

  console.log(result);
  return result.text;
}

