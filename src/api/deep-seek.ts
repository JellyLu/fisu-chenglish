import { createDeepSeek } from "@ai-sdk/deepseek";
import { CoreMessage, generateText, Message } from "ai";

const deepseek = createDeepSeek({
  apiKey: "sk-221d970127f942389d2301dcdfce84da",
});

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

export const sendMultiMsg = async (messages:  Array<CoreMessage> | Array<Omit<Message, 'id'>>) => {

  const result = await generateText({
    model: deepseek('deepseek-chat'),
    messages,
  });

  console.log(result);
  return result;
}

export const getNextWord = async (word: string) => {
  const result = await generateText({
    model: deepseek('deepseek-chat'),
    prompt: `You are a word chain game assistant. You are given a word ${word} and you need to find the next word. The next word should be start with the last letter of the word, only return next word, EXAMPLE OUTPUT: open`,
  });

  console.log("===getNextWord result", result)
  return result.text;
};


export default {
  sendSingleMsg,
  sendMultiMsg,
  getNextWord,
}
