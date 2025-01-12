// import 'server-only';
'use server'
import fs from 'fs';

interface Ticket {
    id: number;
    name: string;
    status: string
    type: string;
}
const filePath = 'lib/database.json';

export async function readFile(){
    return await JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export async function writeFile(data: Record<string,Ticket>){
   await fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
export async function createTicket(data: FormData){
    const ticket = await readFile();
    const id = Date.now();
    const name = data.get('name');
    const type = data.get('type');
    ticket[id] = {id, name, status: 'open', type};
    await writeFile(ticket);
} 