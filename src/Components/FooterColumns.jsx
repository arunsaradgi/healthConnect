import React from 'react'

const FooterColumns = ({ ele }) => {
    const { heading, links } = ele


    return (
        <div className="p-2">
            <h2 className="text-white font-semibold text-xl m-2 mb-3">{heading}</h2>
            {
                links?.map((ele, i) => <h3 key={i} className="m-2">{ele}</h3>)
            }
        </div>
    )
}

export default FooterColumns
