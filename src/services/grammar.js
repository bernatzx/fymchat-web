import { API_URL } from "./config";

export const checkGrammar = async (text) => {
  const response = await fetch(`${API_URL}/grammar/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sentence: text,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to check grammar");
  }

  return await response.json();
};