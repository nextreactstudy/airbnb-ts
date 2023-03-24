import { useState, useEffect } from "react";
import {
    useGetCampListQuery,
    useLazyGetCampListQuery,
} from "../../redux/mainApi";

interface Product {
    id: string;
    name: string;
    quantity: number;
}

interface Review {
    id: string;
    author: string;
    content: string;
}

const MainSearch = () => {
    const [getCamp, { data: CampList }] = useLazyGetCampListQuery();

    useEffect(() => {
        console.log(CampList);
    }, [CampList]);

    const handleGetReview = () => {
        getCamp();
    };

    return (
        <>
            <button onClick={handleGetReview}>msw 확인용</button>
        </>
    );
};

export default MainSearch;
