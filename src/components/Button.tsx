import React, { JSX, ReactElement } from "react";

interface FormProps {
  title: string;
}

export const Button = ({ title }: FormProps) => {
  return (
    <button
      type="button"
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-red-600"
    >
      {title}
    </button>
  );
};
