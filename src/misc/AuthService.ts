import baseUrl from '../libs/axios.ts';
import { retrieveRawInitData } from '@telegram-apps/sdk';

export async function loginWithTelegram() {
  try {
    sessionStorage.removeItem('__telegram__initParams');
    sessionStorage.removeItem('tapps/launchParams');
    const rawData = retrieveRawInitData();
    console.log('loginWithTelegram', rawData);
    const response = await baseUrl.post('/auth', { initData: rawData });

    const { token, user } = response.data;

    if (!token) {
      throw new Error('No token returned from backend');
    }

    localStorage.setItem('jwt', token);
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  } catch (err) {
    console.error('Telegram login failed:', err);
    throw err;
  }
}
