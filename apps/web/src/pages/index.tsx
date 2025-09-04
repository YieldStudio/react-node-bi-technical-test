import React from 'react';
import { useExampleQuery } from '@/hooks/queries/use-example-query';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { data } = useExampleQuery();

  return (
    <>
      <h1>Hello word</h1>
      <Button>Click me</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
