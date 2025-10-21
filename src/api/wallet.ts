import baseUrl from '../libs/axios.ts';

export function updateWallet(wallet:string, userId:string) {
  return baseUrl.put('/user/updateWallet', {wallet, userId} )
}