import baseUrl from '../libs/axios.ts';
import { retrieveRawInitData } from '@telegram-apps/sdk'

export async function loginWithTelegram() {
  try {
    const rawData = retrieveRawInitData();
    console.log('loginWithTelegram', rawData);
    const response = await baseUrl.post(
      '/auth',
      {initData: rawData},
    );

    const { token, user } = response.data;

    if (!token) {
      throw new Error('No token returned from backend');
    }

    localStorage.setItem('jwt', token);

    return user;
  } catch (err) {
    console.error('Telegram login failed:', err);
    throw err;
  }
}
