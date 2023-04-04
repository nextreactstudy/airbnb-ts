import React, { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { LoginButton, Modal, useForm } from "@/common/components";
import Link from "next/link";

interface IModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onOk: (
        selectionRow: any,
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => void;
}

const LoginModal = ({ visible, onOk, setVisible }: IModalProps) => {
    const [selectedDatas, setSelectedDatas] = useState([]);
    const [form] = useForm();
    const dispatch = useAppDispatch();

    const resetModal = () => {
        setSelectedDatas([]);
        form.resetFields([]);
    };

    const modalOnCancelFun = () => {
        setVisible(false);
    };

    const modalOnOkFun = (r, e) => {
        onOk(r, e);
        resetModal();
        setVisible(false);
    };

    return (
        <Modal
            title="로그인 또는 회원가입"
            open={visible}
            closable={true}
            onCancel={() => modalOnCancelFun()}
            onOk={(e) => modalOnOkFun(selectedDatas, e)}
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
            width={600}
        >
            <div className="wrap-btns ">
                <LoginButton
                    className="btn-common"
                    onClick={() => console.log()}
                >
                    구글로 시작하기
                </LoginButton>
                <LoginButton
                    className="btn-common"
                    onClick={() => console.log()}
                >
                    애플로 시작하기
                </LoginButton>
                <LoginButton
                    className="btn-common"
                    onClick={() => console.log()}
                >
                    전화번호로 시작하기
                </LoginButton>

                <LoginButton
                    className="btn-common"
                    onClick={() => {
                        console.log();
                    }}
                >
                    이메일로 로그인하기
                </LoginButton>
            </div>
        </Modal>
    );
};
export default LoginModal;
