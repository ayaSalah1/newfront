import { useState } from 'react';

export const useCheckboxHandlers = (items) => {
    const [selectedIds, setSelectedIds] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    const handleSelectAllChange = () => {
        setSelectAllChecked(!selectAllChecked);

        if (!selectAllChecked) {
            const allItemIds = items.map((item) => item._id);
            setSelectedIds(allItemIds);
        } else {
            setSelectedIds([]);
        }
    };

    const handleCheckboxChange = (event) => {
        const selectedId = event.target.value;

        if (selectedIds.includes(selectedId)) {
            setSelectedIds(selectedIds.filter((id) => id !== selectedId));
        } else {
            setSelectedIds([...selectedIds, selectedId]);
        }
    };

    return {
        selectedIds,
        selectAllChecked,
        handleSelectAllChange,
        handleCheckboxChange
    };
};
