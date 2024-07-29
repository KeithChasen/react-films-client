import { useState } from 'react';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Hidden,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        <ListItem key='Settings'  disablePadding>
        <ListItemButton>
            <ListItemIcon>
            <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
        </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={['lg', 'xl']}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies
          </Typography>
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Settings
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  )
}

export default Navigation
