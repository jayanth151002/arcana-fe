import { Tabs, Button } from 'antd';
import { useState } from 'react';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const NewsContent = () => {
    const defaultPanes = new Array(2).fill(null).map((_, index) => {
        const id = String(index + 1);
        return { label: `Tab ${id}`, children: `Content of Tab Pane ${index + 1}`, key: id };
    });

    const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
    const [items, setItems] = useState(defaultPanes);

    const add = () => {
        const newActiveKey = `newTab${items.length + 1}`;
        setItems([...items, { label: 'New Tab', children: 'New Tab Pane', key: newActiveKey }]);
        setActiveKey(newActiveKey);
    };

    const remove = (targetKey: TargetKey) => {
        const targetIndex = items.findIndex((pane) => pane.key === targetKey);
        const newPanes = items.filter((pane) => pane.key !== targetKey);
        if (newPanes.length && targetKey === activeKey) {
            const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
            setActiveKey(key);
        }
        setItems(newPanes);
    };
    const onChange = (key: string) => {
        setActiveKey(key);
    };

    const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };



    return (
        <div>
            <Button onClick={add}>ADD</Button>
            <Tabs
                hideAdd
                onChange={onChange}
                activeKey={activeKey}
                type="editable-card"
                onEdit={onEdit}
                items={items}
            />
        </div>
    )
}

export default NewsContent