import { useState } from 'react';

export default function HelloReact() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)} className="p-2 bg-blue-500 text-white rounded">
      Clicked {count} times
    </button>
  );
}