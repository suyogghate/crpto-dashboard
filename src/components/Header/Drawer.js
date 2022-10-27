import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Switch } from "@mui/material";
import "./styles.css";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  const [darkTheme, setDarkTheme] = React.useState(
      defaultDark === "dark" ? true : false
  );

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = (e) => {
    if (!darkTheme) {
      setDark();
    } else {
      setLight();
    }
    setDarkTheme(!darkTheme);
  };

  return (
    <div>
      <div className="menu-button">
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon style={{ color: "var(--white)" }} />
        </IconButton>
      </div>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <a href="/">
            <p className="links">Home</p>
          </a>
          <a href="/compare">
            <p className="links">Compare</p>
          </a>
          <a href="/login">
            <p className="links">Login</p>
          </a>
          <a href="/sign-up">
            <p className="links">Sign Up</p>
          </a>
          <a href="/dashboard">
            <p className="links">Dashboard</p>
          </a>
          <p className="links">
            <Switch
              defaultChecked
              value={!darkTheme}
              onClick={() => toggleTheme()}
            />
          </p>
        </div>
      </Drawer>
    </div>
  );
}
