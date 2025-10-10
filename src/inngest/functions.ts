import { inngest } from "./client";
import { Agent, openai, createAgent } from "@inngest/agent-kit";
import { Sandbox } from "@e2b/code-interpreter";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event,step }) => {
    const sandboxId = await step.run("get-sanbox-id",async()=>{
      const sandbox = await Sandbox.create("nextjs-code-agent-template2");
      return sandbox.sandboxId
    })
    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are an expert next.js developer. You write readable,maintainable and scalable code.You are a professional software developer who is proficient in writing clean and efficient code.",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await codeAgent.run(
      `Write the following Snippet: ${event.data.value}`
    );

    const sandboxUrl = await step.run("get-sandbox-url",async()=>{
      const sandbox = await getSandbox(sandboxId);
      const host =  sandbox.getHost(3000);
      return `https://${host}`
    })

    console.log(output);
    return { output , sandboxUrl};
  }
);
