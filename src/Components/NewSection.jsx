import React from 'react';

function NewSection(props) {
    const divs = props.items.map((item, index) => (
        <div key={index} className="col-span-2">
            <a href='#' className='hover:border-red-700 transition-colors border flex flex-col px-4 items-center py-7 rounded'>
                <span className="mb-4 w-24 h-24 border border-red-500 rounded-full grid place-items-center items-center">
                    {item.name}
                </span>
                <span className="inline-flex items-center rounded h-8 px-5 text-white bg-red-500">
                    {item.desc}
                </span>
            </a>
        </div>
    ));

    return (
        <div className="grid mt-5 grid-cols-10 gap-7">
            {divs}
        </div>
    );
}

export default NewSection;
