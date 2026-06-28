import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" }
];

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Aimee Strickland
        </Typography>

        {navItems.map((item) => (
          <Button
            key={item.path}
            color="inherit"
            component={NavLink}
            to={item.path}
            sx={{
              '&.active': {
                backgroundColor: 'rgba(255, 255, 255, 0.16)',
                textDecoration: 'underline',
                textUnderlineOffset: 6,
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;