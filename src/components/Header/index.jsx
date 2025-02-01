import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowBack from '../customIcon/ArrowBack';
import './style.css';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle the drawer and reset scroll position
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
    window.scrollTo(0, 0);
  };

  // Framer Motion Variants for menu items
  const listItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15, duration: 0.8, ease: 'easeOut' },
    }),
  };

  // Framer Motion Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  // Update these links according to your new paths
  const menuLinks = [
    { text: 'Home', path: '/' }, // Changed Home link to /dashboard
    { text: 'About Us', path: 'about' }, // Changed About Us link to /company/about-us
    { text: 'Infrastructure', path: '/infrastructure' }, // Changed Infrastructure link to /services/infrastructure
    { text: 'Projects', path: 'projects' }, // Changed Projects link to /portfolio/projects
    { text:'Media', path: 'media'},
    { text: 'Contact Us', path: 'contact' }, // Changed Contact Us link to /support/contact
  ];

  return (
    <AppBar position="fixed" className="appBar" elevation={0}>
      <Toolbar className="toolbar">
        {/* Left Side Menu */}
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon className="menuIcon" />
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
                {/* <Typography variant="h6" className="drawerTitle">
                Sagar Motors
                </Typography> */}
              </Box>
              {/* Motion List Container */}
              <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <List className="list">
                  {menuLinks.map((item, index) => (
                    <motion.div key={item.text} custom={index} variants={listItemVariants}>
                      <ListItem button component={Link} to={item.path} onClick={toggleDrawer(false)}>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </motion.div>
            </Box>

            {/* Social Icons */}
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
