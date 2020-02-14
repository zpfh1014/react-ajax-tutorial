import React from 'react';
import { Button } from 'semantic-ui-react';
import './Navigate.css';

const Navigate = ({ onClick, postId, disabled }) => {
    return (
        <div className="Navigate">
            <Button
                color="teal"
                content="Prev"
                icon="left arrow"
                labelPosition="left"
                className="Navigate-left-button"
                onClick = {
                    () => onClick('PREV')
                }
                disabled={disabled}
            />
            <div className="Navigate-page-num">{postId}</div>
            <Button
                color="teal"
                content="Next"
                icon="right arrow"
                labelPosition="right"
                className="Navigate-right-button"
                onClick = {
                    () => onClick('NEXT')
                }
                disabled={disabled}
            />
        </div>
    )

}

export default Navigate;