import ISearchResList from "@/mocks/camp/campMock";
import { useState, useEffect } from "react";
import {
    useGetCampListQuery,
    useLazyGetCampListQuery,
} from "../../redux/mainApi";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Spin } from "antd";

// 장소
// 별점
// 전망
// 시작일
// 종료일
// 금액

const MainSearch = () => {
    const [getCamp, { data: CampList, isFetching }] = useLazyGetCampListQuery();
    const [data, setData] = useState<ISearchResList[]>();
    const [selectedDatas, setSelectedDatas] = useState([]);

    useEffect(() => {
        setData(CampList);
    }, [CampList]);

    const handleGetReview = () => {
        getCamp();
    };

    return (
        <>
            <button onClick={handleGetReview}>msw 확인용</button>
            <button onClick={handleGetReview}>msw 확인용</button>
            <button onClick={handleGetReview}>msw 확인용</button>
            <button onClick={handleGetReview}>msw 확인용</button>
            <button onClick={handleGetReview}>msw 확인용</button>
            <button onClick={handleGetReview}>msw 확인용</button>
            <div className="grid col-12 xl:col-12">
                {data?.map((li) => {
                    return (
                        <div className="col-2 border-1" key={li.이름}>
                            <div>{li.사진}</div>
                            <h4>{li.이름}</h4>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default MainSearch;
