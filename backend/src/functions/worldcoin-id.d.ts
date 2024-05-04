// worldcoin-idkit.d.ts
declare module "@worldcoin/idkit" {
  export interface IVerifyResponse {
    success: boolean;
    // Add other properties as needed
  }

  export function verifyCloudProof(
    proof: any,
    appId: string,
    action: string,
    signal?: any
  ): Promise<IVerifyResponse>;
}
