import React from 'react'

export default function ComponentGenerator(props) {
    const {pageConfiguration} = props;
    return (
        <>
            {pageConfiguration && pageConfiguration.length > 0 && pageConfiguration.map((component,index)=>(
                React.createElement(component?.componentName,{key:index, ...props })
            ))}
        </>
    )
}
