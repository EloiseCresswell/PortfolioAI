import "./NavBar.css";
import * as React from "react";
import Box from "@mui/material/Box";
// import Avatar from "@mui/material/Avatar";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Tooltip from "@mui/material/Tooltip";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";

export default function NavBar(): JSX.Element {
  return (
    <React.Fragment>
      <ul>
        <li>Home</li>
        <Box></Box>
        <li>Projects</li>

        <li>Skills</li>

        <li>Contact</li>
      </ul>
    </React.Fragment>
  );
}

//Home, Projects, Skills, Contact Us
