import getConfig from "next/config";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { classNames } from "primereact/utils";
import React, {
    forwardRef,
    useContext,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { LayoutContext } from "./context/layoutcontext";

import { HiOutlineGlobeAlt } from "react-icons/hi";

import { HiBars3, HiUserCircle } from "react-icons/hi2";

import { Select } from "antd";

import LoginModal from "@/modal/LoginModal";

const AppTopbar = forwardRef((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } =
        useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current,
    }));

    const [visible, setVisible] = useState(false);

    // 로그인 모달
    const onSearchLogin = () => {
        setVisible(true);
    };

    return (
        <>
            <div className="layout-topbar">
                {/* <div className='layout-topbar-inner'> */}
                <div className="layout-topbar-logo">
                    <Link href="/">
                        <>
                            <img
                                src={`${contextPath}/layout/images/ABNB_BIG.svg`}
                                width="107.22px"
                                height={"40px"}
                                widt={"true"}
                                alt="logo"
                            />
                            {/* <img src={`${contextPath}/layout/images/ABNB.svg`} width="37.22px" height={'30px'} widt={'true'} alt="logo" /> */}
                            <span className="ir">airbnb</span>
                        </>
                    </Link>
                </div>
                <div className="layout-topbar-menu">
                    <button
                        type="button"
                        className="p-link layout-topbar-button"
                    >
                        당신의
                    </button>
                    <button
                        type="button"
                        className="p-link layout-topbar-button"
                    >
                        당신의
                    </button>
                    <button
                        type="button"
                        className="p-link layout-topbar-button"
                    >
                        당신의
                    </button>
                </div>

                {/* <div
                ref={topbarmenuRef}
                className={classNames("layout-topbar-menu", {
                    "layout-topbar-menu-mobile-active":
                        layoutState.profileSidebarVisible,
                })}
            >
                <Link href="/auth/login">
                    <span>당신의 공간을 에어비앤비하세요</span>
                </Link>
                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-calendar"></i>
                    <span>Calendar</span>
                </button>
                <Link href="/documentation">
                    <button
                        type="button"
                        className="p-link layout-topbar-button"
                    >
                        <i className="pi pi-cog"></i>
                        <span>Settings</span>
                    </button>
                </Link>
            </div> */}
                <div className="layout-topbar-profile">
                    <button
                        type="button"
                        className="p-link layout-topbar-button"
                    >
                        <Link href="/">당신의공간을 에어비엔비하세요</Link>
                    </button>
                    <button type="button" className="p-link top-settings">
                        <HiOutlineGlobeAlt size={20} />
                    </button>
                    <button
                        type="button"
                        className="p-link top-profiles flex align-items-center"
                        onClick={onSearchLogin}
                    >
                        <HiBars3 size={20} fill="#717171" />
                        <HiUserCircle
                            size={28}
                            className="ml-3"
                            fill="#717171"
                        />
                    </button>
                </div>
            </div>

            <LoginModal visible={visible} setVisible={setVisible} />
        </>
    );
});

export default AppTopbar;
