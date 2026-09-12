import { API_URL } from "./config";

export const translator = async (text, target_language) => {
  const response = await fetch(`${API_URL}/translator/translate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      target_language,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to translate");
  }

  return await response.json();
};