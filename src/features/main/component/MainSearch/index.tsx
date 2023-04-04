import ISearchResList from "@/mocks/camp/campMock";
import { useState, useEffect } from "react";
import {
    useGetCampListQuery,
    useLazyGetCampListQuery,
} from "../../redux/mainApi";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Spin } from "antd";

import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";

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

    // 탭버튼

    useEffect(() => {
        setData(CampList);
    }, [CampList]);

    const handleGetReview = () => {
        getCamp();
    };

    return (
        <>
            <div className="grid justify-content-between">
                <div className="col-11 surface-700">ddd</div>
                <div className="col-0 surface-200">filter</div>
            </div>
        </>
    );
};

export default MainSearch;
