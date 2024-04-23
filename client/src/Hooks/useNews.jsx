import React from "react";
import { useQuery } from "react-query";
import { getNews } from "../utils/api";

const useNews = () => {
    const { data, isLoading, isError, refetch } = useQuery(
        "getNews",
        getNews,
        { refetchOnWindowFocus: false }
    );

    return {
        data,
        isError,
        isLoading,
        refetch,
    };
};
export default useNews;