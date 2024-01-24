"use client";
import { useFormStatus } from "react-dom";

export default function AddPersonButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={pending ? "disabled" : ""}>
      {pending ? "Adding person" : "Add a Person"}
    </button>
  );
}