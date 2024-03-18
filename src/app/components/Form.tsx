'use client';

import Input from "@/app/components/Input";
import Loading from "@/app/components/Loading";
import { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);

    const formElement = document.querySelector('form');
    const formData = new FormData(formElement!);

    const categories = formData.get('categories')?.toString();
    const limit = formData.get('limit')?.toString();
    const diff = formData.get('diff')?.toString();

    const params = {
      categories: "science",
      limit: "1",
      difficulty: "medium",
    };
    const queryParams = new URLSearchParams(params);

    try {
      const res = await fetch('https://the-trivia-api.com/api/questions?' + queryParams)
        .then(res => res.json())
        .then(res => {

        });
    } catch ( error ) {
      alert(error);
    } finally {
      setLoading(false);
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col w-64 space-y-4">
        <h1 className="text-xl font-bold">New Quiz</h1>
        <Input name="categories" placeholder="category" />
        <Input name="limit" placeholder="limit" />
        <Input name="diff" placeholder="difficulty" />
        {loading ? (
          <Loading />
        ) : (
          <button
            type="submit"
            className="font-bold text-lg p-2 bg-slate-300 rounded-lg scale-90 duration-150 hover:scale-100"
          >
            Submit
          </button>
        )}
      </form>
    </>
  );
}

export default Form;
