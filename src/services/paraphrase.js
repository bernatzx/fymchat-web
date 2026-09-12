import { API_URL } from "./config";

export const paraphrase = async (text) => {
  const response = await fetch(`${API_URL}/paraphrase/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to translate");
  }

  return await response.json();
};