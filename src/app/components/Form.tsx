'use client';

import Input from "@/app/components/Input";
import { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    
  };

  return (
    <>
      <form className="flex flex-col w-64 space-y-4">
        <h1 className="text-xl font-bold">New Quiz</h1>
        <Input name="categories" placeholder="category" />
        <Input name="limit" placeholder="limit" />
        <Input name="diff" placeholder="difficulty" />
        <button
          className="font-bold text-lg p-2 bg-slate-300 rounded-lg scale-90 duration-150 hover:scale-100"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
