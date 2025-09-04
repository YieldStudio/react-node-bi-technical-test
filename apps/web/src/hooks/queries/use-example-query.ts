import { useQuery } from '@tanstack/react-query';

const queryFn = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/example`);

  return res.json();
};

export function useExampleQuery() {
  return useQuery<unknown>({
    queryKey: ['example'],
    queryFn,
  });
}
