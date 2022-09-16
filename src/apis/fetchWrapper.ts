export const fetchWrapper = async (url: string): Promise<Response> => {
  const response = await fetch(url);

  if (!response.ok) throw new Error('');

  return response;
};
