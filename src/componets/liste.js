import React from 'react'

import Comment from "./comment"
import { useSelector } from 'react-redux';
import { Alert, AlertTitle } from '@material-ui/lab';
const Liste = (props) => {
    const tasks = useSelector(state => state )
    console.log(tasks)
    return (
        
        <div>

            {tasks.length !== 0 ? (
                
                tasks.map(el => {
                    return (el.description.includes(props.filter) ? <Comment key={el.id} id={el.id} description={el.description} />: "")
                })
                 )
                : (
                    <Alert severity="warning">
                    <AlertTitle>no text </AlertTitle>
                    
                    </Alert>
                )
            }
        </div>
    )
}

export default Liste
