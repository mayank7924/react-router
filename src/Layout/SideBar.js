import React from 'react'
import { withStyles } from "@mui/styles";

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '10px',
        width: '320px',
        height: '100%',
        backgroundColor: '#C0C0C0'
    }
}

const Sidebar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
        </div>
    )
}
export default withStyles(style)(Sidebar);
