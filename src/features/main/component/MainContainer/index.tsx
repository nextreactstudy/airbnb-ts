import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";

const MainContainer = () => {
    const scrollableTabs = Array.from({ length: 13 }, (_, i) => ({
        title: `Tab ${i + 1}`,
        content: `Tab ${i + 1} Content`,
    }));

    const tabs = [
        {
            title: "한옥",
            content: "한옥",
        },
        {
            title: "해변 바로 앞",
            content: "해변 바로 앞",
        },
        {
            title: "한적한 시골",
            content: "한적한 시골",
        },
        {
            title: "세상의 곡대기",
            content: "세상의 곡대기",
        },
        {
            title: "농장",
            content: "농장",
        },
        {
            title: "개인실",
            content: "개인실",
        },
        {
            title: "최고의 전망",
            content: "최고의 전망",
        },
        {
            title: "기상천외한 숙소",
            content: "기상천외한 숙소",
        },
        {
            title: "인기 급상승",
            content: "인기 급상승",
        },
        {
            title: "료칸",
            content: "료칸",
        },
        {
            title: "국립공원",
            content: "국립공원",
        },
        {
            title: "멋진 수영장",
            content: "멋진 수영장",
        },
        {
            title: "저택",
            content: "저택",
        },
        {
            title: "초소형 주택",
            content: "초소형 주택",
        },
        {
            title: "캐슬",
            content: "캐슬",
        },
        {
            title: "신규",
            content: "신규",
        },
        {
            title: "디자인",
            content: "디자인",
        },
        {
            title: "캠핑장",
            content: "캠핑장",
        },
        {
            title: "Luxe",
            content: "Luxe",
        },
        {
            title: "속세를 벗어난 숙소",
            content: "속세를 벗어난 숙소",
        },
        {
            title: "열대 지역",
            content: "열대 지역",
        },
        {
            title: "통나무집",
            content: "통나무집",
        },
        {
            title: "상징적 도시",
            content: "상징적 도시",
        },
    ];

    return (
        <div className="grid">
            <TabView className="col-12 xl:col-9" scrollable>
                {tabs.map((tab) => {
                    return (
                        <TabPanel key={tab.title} header={tab.title}>
                            {/* <p className="m-0">{tab.content}</p> */}
                        </TabPanel>
                    );
                })}
            </TabView>
            <div className="card">ddd</div>
        </div>
    );
};
export default MainContainer;
