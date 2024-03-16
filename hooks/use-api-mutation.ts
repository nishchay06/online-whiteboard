import { use, useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (mutationFunction: any) => {
    const [pending, setPending] = useState(false);
    const apiMutation = useMutation(mutationFunction);

    const mutate = (payload: any) => {
        setPending(true);
        return apiMutation(payload)
        .finally(() => {
            setPending(false);
        })
        .then((res: any) => {
            return res;
        })
        .catch((err: any) => {
            throw err;
        });
    }

    return {
        mutate,
        pending
    }
}