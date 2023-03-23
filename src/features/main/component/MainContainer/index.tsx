import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";

import * as ReactIcons from "react-icons/gi";

const MainContainer = () => {
    const scrollableTabs = Array.from({ length: 13 }, (_, i) => ({
        title: `Tab ${i + 1}`,
        content: `Tab ${i + 1} Content`,
    }));

    const tabHeaderTemplate = (options) => {
        const Compoenent = ReactIcons[options.leftIconElement?.props.className];

        return (
            <button
                type="button"
                // onClick={() => console.log(options.leftIconElement)}
                onClick={options.onClick}
                className={`${options.className} flex-column`}
            >
                {/* <GiCampingTent size={40} /> */}
                <Compoenent size={30} className="mb-3" />
                {options.titleElement}
            </button>
        );
    };

    const tabs = [
        {
            title: "캠핑장",
            content: "캠핑장",
            leftIcon: "GiCampingTent",
        },
        {
            title: "한옥",
            content: "한옥",
            leftIcon: "GiFamilyHouse",
        },
        {
            title: "해변 바로 앞",
            content: "해변 바로 앞",
            leftIcon: "GiWaterfall",
        },
        {
            title: "한적한 시골",
            content: "한적한 시골",
            leftIcon: "GiTreehouse",
        },
        {
            title: "세상의 곡대기",
            content: "세상의 곡대기",
            leftIcon: "GiMountaintop",
        },
        {
            title: "농장",
            content: "농장",
            leftIcon: "GiFarmer",
        },
        {
            title: "개인실",
            content: "개인실",
            leftIcon: "GiHood",
        },
        {
            title: "최고의 전망",
            content: "최고의 전망",
            leftIcon: "GiTreasureMap",
        },
        {
            title: "기상천외한 숙소",
            content: "기상천외한 숙소",
            leftIcon: "GiInterceptorShip",
        },
        {
            title: "인기 급상승",
            content: "인기 급상승",
            leftIcon: "GiCampfire",
        },
        {
            title: "료칸",
            content: "료칸",
            leftIcon: "GiBlockHouse",
        },
        {
            title: "국립공원",
            content: "국립공원",
            leftIcon: "GiParkBench",
        },
        {
            title: "멋진 수영장",
            content: "멋진 수영장",
            leftIcon: "GiPoolDive",
        },
        {
            title: "저택",
            content: "저택",
            leftIcon: "GiDamagedHouse",
        },

        {
            title: "초소형 주택",
            content: "초소형 주택",
            leftIcon: "GiBirdHouse",
        },
        {
            title: "캐슬",
            content: "캐슬",
            leftIcon: "GiCastle",
        },
        {
            title: "신규",
            content: "신규",
            leftIcon: "GiStarKey",
        },
        {
            title: "열대 지역",
            content: "열대 지역",
            leftIcon: "GiPalmTree",
        },
        {
            title: "통나무집",
            content: "통나무집",
            leftIcon: "GiLog",
        },
        {
            title: "상징적 도시",
            content: "상징적 도시",
            leftIcon: "GiControlTower",
        },
    ];

    return (
        <div className="grid justify-content-between">
            <TabView className="col-11" scrollable>
                {tabs.map((tab) => {
                    return (
                        <TabPanel
                            key={tab.title}
                            header={tab.title}
                            leftIcon={tab.leftIcon}
                            headerTemplate={tabHeaderTemplate}
                        >
                            <p className="m-0">{tab.content}</p>
                        </TabPanel>
                    );
                })}
            </TabView>
            <div className="col-1">ddd</div>
        </div>
    );
};
export default MainContainer;
