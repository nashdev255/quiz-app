'use server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categories = searchParams.get('categories');
  const limit      = searchParams.get('limit');
  const diff       = searchParams.get('diff');

  // const res = await fetch(
  //   `https://the-trivia-api.com/api/questions?categories=${categories}&limit=${limit}difficulty=${diff}`
  // );
  const res = await fetch(
    `https://the-trivia-api.com/api/questions?categories=science&limit=2&difficulty=medium`
  );
  const data = await res.json();

  return Response.json({ data });
}
