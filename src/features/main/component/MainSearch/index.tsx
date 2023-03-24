import type { InferGetServerSidePropsType } from "next";
import { useState } from "react";

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
    const [reviews, setReviews] = useState<Review[]>([]);

    const handleGetReview = () => {
        fetch("http://localhost:12300/campSearch")
            .then((res) => res.json())
            .then(setReviews);
    };

    return (
        <>
            <button onClick={handleGetReview}>msw 확인용</button>
        </>
    );
};

export default MainSearch;
