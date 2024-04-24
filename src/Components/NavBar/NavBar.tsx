import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./NavBar.css";
import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "pink",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NavBar(): JSX.Element {
  return (
    <React.Fragment>
      <div className="navBarThings">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={5}
          className="navBarStack"
        >
          <a href="#">
            <Item>Home</Item>
          </a>
          <a href="#">
            <Item>Skills</Item>
          </a>
          <a href="#">
            <Item>Projects</Item>
          </a>
          <a href="#">
            <Item>Contact</Item>
          </a>
        </Stack>
      </div>
    </React.Fragment>
  );
}

//Home, Projects, Skills, Contact Us
