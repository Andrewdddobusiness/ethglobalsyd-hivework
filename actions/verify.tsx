export default async function handleVerify(proof: ISuccessResult) {
  const res = await fetch("http://localhost:7071/api/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(proof),
  });
  if (!res.ok) {
    throw new Error("Verification failed."); // IDKit will display the error message to the user in the modal
  }
}
