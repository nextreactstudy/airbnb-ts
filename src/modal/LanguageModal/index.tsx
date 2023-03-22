import React, { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { Modal, useForm } from "@/common/components";

interface IModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onOk: (
        selectionRow: any,
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => void;
}

const LanguageModal = ({ visible, onOk, setVisible }: IModalProps) => {
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
            title=""
            open={visible}
            closable={true}
            onCancel={() => modalOnCancelFun()}
            onOk={(e) => modalOnOkFun(selectedDatas, e)}
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
        >
            <div>자 꾸며봅시다</div>

            <div>언어세팅모달</div>
        </Modal>
    );
};
export default LanguageModal;
