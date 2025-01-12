'use client';

import { createTicket } from '@/lib/actions';
import { useRouter } from 'next/navigation';

const Ticket = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    await createTicket(data);
    router.push('/');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' />
        <br />
        <label htmlFor='type'>Type:</label>
        <input type='text' name='type' />

        <button type='submit'>+Add</button>
      </form>
    </div>
  );
};

export default Ticket;
