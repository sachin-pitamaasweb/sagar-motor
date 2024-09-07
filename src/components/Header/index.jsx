import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css'; // Import your SCSS file

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" className="appBar" elevation={0}>
      <Toolbar className="toolbar">
        {/* Left Side Menu */}
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon className='menuIcon' />
        </IconButton>

        {/* Right Side Website Name */}
        <Typography variant="h6" className="websiteName">
          Sagar Motors
        </Typography>

        {/* Drawer for Left Side Menu */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box className="drawerBox" role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Cars" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
