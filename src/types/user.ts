export interface User {
  id: string;
  telegramId: string;
  firstName?: string | null;
  lastName?: string | null;
  username?: string | null;
  photoUrl?: string | null;
  createdAt?: string;
  wallet?: string | null;
  balance: number;
}
