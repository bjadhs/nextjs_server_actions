"use server";

import { readFile, writeFile } from "./helper";

export const getTodo = async () => {
    const test = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const res = await test.json();
    return res;
    console.log("I am a server action");
  };

export async function createTicket(formData: FormData){
    const ticket = await readFile();
    const id = Object.keys(ticket).length + 1;
    const name = formData.get('name') as string;
    const type = formData.get('type') as string;
    ticket[id] = {id, name, status: 'open', type};
    await writeFile(ticket);
} 