"use server";
export const getTodo = async () => {
    const test = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const res = await test.json();
    return res;
    console.log("I am a server action");
  };