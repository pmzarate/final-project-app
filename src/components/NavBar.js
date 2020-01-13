import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import '../App.css'

const NavBar = (props) =>  {
    const style = {
        color: 'navy'
    }


return (
    <AppBar position="relative">
            <Toolbar>
                <Typography variant="default" style={{ flexGrow: "1" }}
                color = "inherit">
                </Typography>
                    <ul className="navigation-list">
                        {/* <li className="nav-list-item">
                        <Link to="/" style={style}>Latest Reports</Link> 
                        </li> */}
                        {/* {document.cookie === "loggedIn=true" ? (
                            <> */}
                            {/* <li className="nav-list-item">
                                <Link to="/ReportPage" style ={style}>Report Incident</Link>
                            </li> */}
                            {/* <li className="nav-list-item" onClick = {handleLogout}>
                                <Link to ="/" style={style}>Log Out</Link>
                            </li> */}
                            {/* </>
                        ):(
                            <li className="nav-list-item">
                                <Link to="/login" style={style}> Login</Link>
                            </li>
                        )} */}
                        </ul>
                </Toolbar> 
            </AppBar>
    )
}

export default NavBar