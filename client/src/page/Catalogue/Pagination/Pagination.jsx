import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default ({handleChangePage, quantity})  => {
    
    const [page, setPage] = useState(1)

    const handleChange = (e, value) => {
        setPage(value)
        handleChangePage(value)
    }
    const classes = useStyles();
    console.log(quantity)

    return (
        <div className={classes.root}>
            <Pagination 
                count={quantity}
                variant="outlined" 
                shape="rounded" 
                color="primary"
                page={page} 
                onChange={handleChange}
            />
        </div>
    );
}