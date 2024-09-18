import React, { useState } from 'react';

// MUI components
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';

// React Router
import { Link } from 'react-router-dom';

// MUI icons
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// Custom icons
import ArrowBack from '../customIcon/ArrowBack';

// Import the SCSS file
import './style.css';

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
            <Box className="drawerContent">
              <Box className="drawerHeader">
                <IconButton edge="start" className="backButton" onClick={toggleDrawer(false)}>
                  <ArrowBack style={{ color: 'white' }} />
                </IconButton>
                <Typography variant="h6" className="drawerTitle">
                  Menu
                </Typography>
              </Box>
              <List className="list">
                <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem button component={Link} to="/infrastructure" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Infrastructure" />
                </ListItem>
                <ListItem button component={Link} to="/projects" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Projects" />
                </ListItem>
                <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Contact Us" />
                </ListItem>
              </List>
            </Box>
            <Box className="socialIcons">
              <IconButton color="inherit" component="a" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{ color: 'white', fontSize: '40px' }} />
              </IconButton>
              <IconButton color="inherit" component="a" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon style={{ color: 'white', fontSize: '40px' }} />
              </IconButton>
              <IconButton color="inherit" component="a" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ color: 'white', fontSize: '40px' }} />
              </IconButton>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
