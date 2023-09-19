import axios, { AxiosPromise } from 'axios'

import { ComidaData } from '../data/ComidaData'

import { useQuery } from '@tanstack/react-query'

const COMIDA_API_URL = 'https://b9fj4nrc-8080.use2.devtunnels.ms/foods'

const fechData = async  (): AxiosPromise<ComidaData[]> => {
    const response =  axios.get(COMIDA_API_URL);
    return response;
}

export function useComidaData() {
    const query = useQuery({
        queryFn: fechData,
        queryKey: ['comida-data'],
        retry: 2,
    })
    return {
        ...query,
        data: query.data?.data
        
    }
}



