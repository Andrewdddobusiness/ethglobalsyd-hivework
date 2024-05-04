// import {
//   app,
//   HttpRequest,
//   HttpResponseInit,
//   InvocationContext,
// } from "@azure/functions";
// import { createPublicClient, http } from "viem";
// import { sepolia, baseSepolia } from "viem/chains";

// import { contractAbi } from "../../abi/contactAbi";

// // Define the address of your deployed contract
// const contractAddress: `0x${string}` =
//   "0xfbCE5b61b4454DDC61Db6C9375457E60454B3cA0";

// // Create a client to interact with the Ethereum network
// const client = createPublicClient({
//   chain: baseSepolia,
//   transport: http("https://sepolia.base.org"), // Ensure correct RPC endpoint
// });

// export async function verifyExecute(
//   request: HttpRequest,
//   context: InvocationContext
// ): Promise<HttpResponseInit> {
//   try {
//     const { signal, root, nullifierHash, proof }: any = await request.json();

//     const { request: simulatedRequest } = await client.simulateContract({
//       address: contractAddress,
//       abi: contractAbi,
//       functionName: "verifyAndExecute",
//       args: [signal, root, nullifierHash, proof],
//     });

//     // Return the transaction hash as the response
//     return { body: `Transaction hash: ${simulatedRequest}` };
//   } catch (error) {
//     console.error("Error calling contract:", error);
//     return { status: 500, body: "Error executing contract call." };
//   }
// }

// app.http("verify-execute", {
//   methods: ["POST"],
//   authLevel: "anonymous",
//   route: "verify-execute",
//   handler: verifyExecute,
// });
