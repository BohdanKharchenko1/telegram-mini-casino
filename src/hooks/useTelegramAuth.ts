import { useRawInitData } from '@telegram-apps/sdk-react'
import baseUrl from '../libs/axios.ts';
import { useEffect, useState } from 'react';

export default function useTelegramAuth() {
    const rawData = useRawInitData();
    const [response, setResponse] = useState(null);
        const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        if(!rawData) return;

        const fetchData = async () => {
            try{
                const res = await baseUrl.post('/auth',{}, {
                    headers: {'Authorization' : `tma ${rawData}`}
                });
                console.log(rawData);
                setResponse(res.data);

            }catch(error){
                setError(error);
            }
        }
        fetchData();
    }, [rawData]);
    return { response, error };

}