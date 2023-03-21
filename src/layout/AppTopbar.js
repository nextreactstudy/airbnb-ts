import getConfig from 'next/config';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { LayoutContext } from './context/layoutcontext';

import { Select } from 'antd';

const AppTopbar = forwardRef((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    return (
        <div className="layout-topbar">
            {/* <div className='layout-topbar-inner'> */}
                <Link href="/">
                    <div className="layout-topbar-logo">
                        <>
                            <img src={`${contextPath}/layout/images/ABNB_BIG.svg`} width="107.22px" height={'40px'} widt={'true'} alt="logo" />
                            <img src={`${contextPath}/layout/images/ABNB.svg`} width="37.22px" height={'30px'} widt={'true'} alt="logo" />
                            <span className='ir'>airbnb</span>
                        </>
                    </div>
                </Link>
                <div>인풋이 들어갈거야</div>


                {/* <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                    <i className="pi pi-ellipsis-v" />
                </button> */}
                <div className='layout-topbar-menu'>
                    <button type="button" className="p-link layout-topbar-button" >당신의</button>
                    <button type="button" className="p-link layout-topbar-button" >당신의</button>
                    <button type="button" className="p-link layout-topbar-button" >당신의</button>
                </div>

                <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                    <Link href="/auth/login">
                        <span>당신의 공간을 에어비앤비하세요</span>
                    </Link>
                    <button type="button" className="p-link layout-topbar-button">
                        <i className="pi pi-calendar"></i>
                        <span>Calendar</span>
                    </button>
                    <Link href="/documentation">
                        <button type="button" className="p-link layout-topbar-button">
                            <i className="pi pi-cog"></i>
                            <span>Settings</span>
                        </button>
                    </Link>
                </div>
            {/* </div> */}
        </div>
    );
});

export default AppTopbar;
