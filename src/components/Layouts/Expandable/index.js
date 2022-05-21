import React from 'react'
import Expand from "react-expand-animated";

import { FlexBox } from '../Boxes'

const index = ({
    className,
    open,
    header,
    children
}) => {

    const transitions = ["height", "opacity"];

    return (
        <FlexBox column className={className}>
            {header}
            <Expand
                open={open}
                duration={300}
                transitions={transitions}
            >
                {children}
            </Expand>
        </FlexBox>
    )
}

index.propTypes = {

}

export default index
