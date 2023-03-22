import getConfig from "next/config";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { LayoutContext } from "./context/layoutcontext";

import { HiOutlineGlobeAlt } from "react-icons/hi";
import { Form, useForm, FormItem, Space, Search } from "@/common/components";
import { IoIosArrowUp } from "react-icons/io";
import { BiWon } from "react-icons/bi";
import LanguageModal from "@/modal/LanguageModal";
import KRWModal from "@/modal/KRWModal";

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const [form] = useForm();
    const [visible, setVisible] = useState(false);

    const [visible1, setVisible1] = useState(false);

    // 언어선택 모달
    const onSearchLanguage = () => {
        setVisible(true);
    };

    // 통화 모달
    const onSearchKRW = () => {
        setVisible1(true);
    };

    return (
        <>
            <div className="layout-footer">
                <div className="layout-footer-inner">
                    <div className="footer-inner-left">
                        <span>© 2023 Airbnb, Inc.</span>
                        <Link href={"/help/article"}>
                            <span>개인정보 처리방침</span>
                        </Link>
                        <Link href={"/help/service"}>
                            <span>이용약관</span>
                        </Link>
                        <span>.</span>

                        <Link href={"/sitemaps"}>
                            <span>사이트맵</span>
                        </Link>
                        <Link href={"/home/policy"}>
                            <span>한국의 변경된 환불 정책</span>
                        </Link>
                        <Link href={"/about/company-details"}>
                            <span>회사 세부정보</span>
                        </Link>
                    </div>
                    <div className="footer-inner-right">
                        <button
                            type="button"
                            className="p-link layout-footer-button"
                            onClick={onSearchLanguage}
                        >
                            <HiOutlineGlobeAlt size={17} />
                            한국어 (KR)
                        </button>
                        <button
                            type="button"
                            className="p-link layout-footer-button"
                            onClick={onSearchKRW}
                        >
                            <BiWon size={17} />
                            KRW
                        </button>
                        <button
                            type="button"
                            className="p-link layout-footer-button"
                        >
                            지원 및 참고 자료
                            <IoIosArrowUp size={17} />
                        </button>
                    </div>
                </div>
                <div className="layout-footer-bottom">
                    웹사이트 제공자: Airbnb Ireland UC, private unlimited
                    company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사:
                    Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호:
                    IE9827384L | 사업자 등록 번호: IE 511825 | 연락처:
                    terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스
                    제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
                    에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는
                    통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여
                    예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당
                    서비스를 제공하는 호스트에게 있습니다.
                </div>
            </div>

            <LanguageModal visible={visible} setVisible={setVisible} />

            <KRWModal visible={visible1} setVisible={setVisible1} />
        </>
    );
};

export default AppFooter;
