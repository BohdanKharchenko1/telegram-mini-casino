import { io } from 'socket.io-client';

const URL:string  = import.meta.env.VITE_URL;

export const socket = io(URL, { autoConnect: false });