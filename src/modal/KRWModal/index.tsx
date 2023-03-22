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

const KRWModal = ({ visible, onOk, setVisible }: IModalProps) => {
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
            <div>다나카 이무니다 꾸며봅시다</div>
            <div>다나카 이무니다 꾸며봅시다</div>
            <div>다나카 이무니다 꾸며봅시다</div>
            <div>다나카 이무니다 꾸며봅시다</div>
            <div>다나카 이무니다 꾸며봅시다</div>
            <div>다나카 이무니다 꾸며봅시다</div>
            <div>다나카 이무니다 꾸며봅시다</div>

            <div>통화모달 이무니다.</div>
        </Modal>
    );
};
export default KRWModal;
