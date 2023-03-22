import getConfig from "next/config";
import Link from "next/link";
import React, { useContext } from "react";
import { LayoutContext } from "./context/layoutcontext";

import { HiOutlineGlobeAlt } from "react-icons/hi";

import { IoIosArrowUp } from "react-icons/io";
import { BiWon } from "react-icons/bi";

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div className="layout-footer">
            <div className="layout-footer-inner">
                <div className="footer-inner-left">
                    <span>© 2023 Airbnb, Inc.</span>
                    <Link href={"./"}>
                        <span>개인정보 처리방침</span>
                    </Link>
                    <Link href={"./"}>
                        <span>이용약관</span>
                    </Link>
                    <span>.</span>

                    <Link href={"./"}>
                        <span>사이트맵</span>
                    </Link>
                    <Link href={"./"}>
                        <span>한국의 변경된 환불 정책</span>
                    </Link>
                    <Link href={"./"}>
                        <span>회사 세부정보</span>
                    </Link>
                </div>
                <div>
                    <span>
                        <HiOutlineGlobeAlt size={16} />
                        한국어 (KR)
                    </span>
                    <span>
                        <BiWon size={16} />
                        KRW
                    </span>
                    <span>
                        지원 및 참고 자료
                        <IoIosArrowUp />
                    </span>
                </div>
            </div>
            <div className="layout-footer-bottom">
                웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8
                Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke,
                Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L |
                사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com,
                웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스
                | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여
                게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다.
                에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에
                관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
            </div>
        </div>
    );
};

export default AppFooter;
