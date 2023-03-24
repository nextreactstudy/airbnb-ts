import ISearchResList from "@/mocks/camp/campMock";
import { useState, useEffect } from "react";
import {
    useGetCampListQuery,
    useLazyGetCampListQuery,
} from "../../redux/mainApi";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

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
            <DataTable
                value={data}
                loading={isFetching}
                selectionMode="checkbox"
                selection={selectedDatas}
                onSelectionChange={(e) => setSelectedDatas(e.value)}
                paginator
                rows={5}
            >
                <Column field="사진" header="사진" />
                <Column field="금액" header="금액" />
                <Column field="별점" header="별점" />
            </DataTable>
        </>
    );
};

export default MainSearch;
