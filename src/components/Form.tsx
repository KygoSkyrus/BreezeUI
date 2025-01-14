import React, { JSX, ReactElement } from "react";

interface FormProps {
  title: string;
  onSubmit: (data: Record<string, string>) => void;
}

export const Form = ({ title, onSubmit }: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    const data = Object.fromEntries(
      formData.entries() as Iterable<[string, string]>
    ) as Record<string, string>;

    onSubmit(data);
  };

  return (
    <form className="p-4 bg-gray-100 rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};
