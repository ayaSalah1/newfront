import React from 'react';

function TreeComponent(props) {
    return (
        <div className={"flex flex-col md:w-60 w-full gap-10"}>
            <h3 className={"font-bold pr-5"}>{props.title}
            </h3>
            <div className={"flex flex-col p-5 border-l-2"}>
                <div className={"flex flex-col bg-default-input p-5 rounded-md"}>
                    <div className={"flex items-center gap-3"}>
                        <input type={"checkbox"} name={""} onChange={() => {
                        }}/>
                        <p className={"text-md"}>ناشر</p>
                    </div>
                    <div className={"flex items-center gap-3"}>
                        <input type={"checkbox"} name={""} onChange={() => {
                        }}/>
                        <p className={"text-md"}>ناشر كاتب محتوى</p>
                    </div>
                    <div className={"flex items-center gap-3"}>
                        <input type={"checkbox"} name={""} onChange={() => {
                        }}/>
                        <p className={"text-md"}>ناشر محترف</p>
                    </div>
                    <div className={"flex items-center gap-3"}>
                        <input type={"checkbox"} name={""} onChange={() => {
                        }}/>
                        <p className={"text-md"}>ناشر محترف رافع</p>
                    </div>
                    <div className={"flex items-center gap-3"}>
                        <input type={"checkbox"} name={""} onChange={() => {
                        }}/>
                        <p className={"text-md"}>test department</p>
                    </div>
                    <div className={"flex items-center gap-3"}>
                        <input type={"checkbox"} name={""} onChange={() => {
                        }}/>
                        <p className={"text-md"}>test</p>
                    </div>
                    <div className={"flex items-center gap-3"}>
                        <input type={"checkbox"} name={""} onChange={() => {
                        }}/>
                        <p className={"text-md"}>test team</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TreeComponent;