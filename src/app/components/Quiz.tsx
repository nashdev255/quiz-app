'use server';

const Quiz = async ({ categories, limit, diff }: {
  categories: string,
  limit: string,
  diff: string
}) => {
  const data = fetch(`api?categories=${categories}&limit=${limit}&diff=${diff}`);

  return (
    <>
      {
        data
      }
    </>
  );
};

export default Quiz;
