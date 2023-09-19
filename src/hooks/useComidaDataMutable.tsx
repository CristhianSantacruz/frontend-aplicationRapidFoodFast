import axios, { AxiosPromise } from "axios"
import { ComidaData } from "../data/ComidaData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'https://b9fj4nrc-8080.use2.devtunnels.ms/add'

const postData = async (data:ComidaData) : AxiosPromise => {
    const response = axios.post(API_URL,data);
    return response;

}
export function useComidaDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}