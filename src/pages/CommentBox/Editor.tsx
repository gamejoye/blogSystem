import React from "react";
import { Input, Button } from "antd";
const { TextArea } = Input;

interface IProps {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: () => void;
    submitting: boolean;
    value: string;
}

const Editor = ({ onChange, onSubmit, submitting, value }: IProps) => (
    <>
        <TextArea rows={3} onChange={onChange} value={value} placeholder='留下你的精彩评论吧~' />
        <Button loading={submitting} onClick={onSubmit} type="primary">
            发布
        </Button>
    </>
);
export default Editor;