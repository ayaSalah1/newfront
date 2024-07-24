import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        outline: 'none',
        paddingLeft: '20px',
        paddingRight: '10px',
        height: "auto",
        display: 'flex',
        alignItems: 'center', // لضمان أن العلامة تبقى في الوسط
        background: 'url(data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140"><polygon points="70,100 25,40 115,40" fill="%23498696"/></svg>) no-repeat',
        backgroundSize: '15px',
        backgroundPosition: state.isMulti ? '99.9% 50%' : '5% 50%',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#A6CDD766',
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: '#A6CDD766',
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: '#000',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#6B7280', // text-default-opacity color
    }),
    menuList: (provided) => ({
        ...provided,
        maxHeight: '200px', // يمكنك تغيير هذا القيمة حسب الحاجة
        overflowY: 'auto',
    }),
};

function MultiSelectComponent(props) {
    return (
        <div className={" " + props.className}>
            <Select
                isMulti
                name={props.name}
                options={props.options}
                className="w-full text-default-opacity"
                classNamePrefix="select"
                value={props.value}
                onChange={props.onChange}
                placeholder={props.title}
                styles={customStyles}
            />
        </div>
    );
}

export default MultiSelectComponent;
