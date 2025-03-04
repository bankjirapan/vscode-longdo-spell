
async function postProof(text: string, indices: any) {
    try {
      const response = await fetch("http://localhost:8000/proof", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          key: "15b2073bdae95b7376e5c4c56427a623",
        }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error sending to API:", error);
    }
  }

export {
    postProof
};