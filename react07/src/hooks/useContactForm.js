import { useState } from "react";

export function useContactform() {
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const submitContact = async (formData) => {
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccessMessage(data.success || "Message sent");
    } catch (error) {
      setErrorMessage(error.message || "Request failed");
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    successMessage,
    errorMessage,
    submitContact,
  };
}
