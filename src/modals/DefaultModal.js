import React from 'react';

function DefaultModal(props) {
    return (
        <div id="add-department-modal" tabIndex="-1" aria-hidden="true"
             className={(props.isModalOpen ? "flex" : "hidden") + " fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50"}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div
                        className="flex items-center justify-between px-4 pt-4 pb-2 md:px-5 md:pt-4 md:pb-2 rounded-t">
                        <h3 className="mr-3 text-lg font-semibold text-gray-900 dark:text-white">
                            {props.title}
                        </h3>
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal" onClick={props.onClose}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    {props.children}

                </div>
            </div>
        </div>
    );
}

export default DefaultModal;