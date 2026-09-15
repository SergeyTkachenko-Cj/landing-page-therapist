import { InferenceClient } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of website URLs that a user has and suggests a humorous diagnosis based on how those websites look/feel/behave. 
Review each website and analyze it, so your diagnosis looks related and relevant.
Format your response in markdown to make it easier to render to a web page. 
`

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

const hf = new InferenceClient(process.env.REACT_APP_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(websitesArr) {
    // const websitesString = websitesArr.join(", ")
    const websitesString = websitesArr
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${websitesString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}
