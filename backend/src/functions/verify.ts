// import {
//   app,
//   HttpRequest,
//   HttpResponseInit,
//   InvocationContext,
// } from "@azure/functions";

// type TAppId = `app_${string}`;

// export async function verify(
//   request: HttpRequest,
//   context: InvocationContext
// ): Promise<HttpResponseInit> {
//   context.log(`HTTP function processed request for URL "${request.url}"`);

//   let body;
//   try {
//     body = await request.json(); // Parse the JSON body
//   } catch (e) {
//     return {
//       status: 400,
//       headers: { "Content-Type": "application/json" },
//       body: { error: "Invalid JSON in request body." },
//     };
//   }

//   const { proof, signal } = body;
//   const app_id: TAppId = (`app_${process.env.APP_ID}` as TAppId) || "app_";
//   const action = process.env.ACTION_ID;

//   try {
//     const idkit = await import("@worldcoin/idkit");
//     const verifyRes = await idkit.verifyCloudProof(
//       proof,
//       app_id,
//       action,
//       signal
//     );

//     if (verifyRes.success) {
//       return {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//         body: { success: true, message: "Verification successful." },
//       };
//     } else {
//       return {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//         body: { success: false, message: "Verification failed." },
//       };
//     }
//   } catch (error) {
//     context.log("Error during verification:", error.message);
//     return {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//       body: { success: false, message: "Internal server error." },
//     };
//   }
// }

// app.http("verify", {
//   methods: ["GET", "POST"],
//   authLevel: "anonymous",
//   handler: verify,
// });
