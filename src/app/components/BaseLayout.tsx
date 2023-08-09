'use client';
import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button, Tooltip, Avatar, Container, Badge } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { ShoppingCart } from '@mui/icons-material';
import { connect } from 'react-redux';

function BaseLayout(props: any) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    {
      title: 'Products',
      slug: 'products',
    },
    {
      title: 'Add Product',
      slug: 'add-product',
    },
    {
      title: 'Product List',
      slug: 'product-list',
    },
    {
      title: 'Blog',
      slug: 'blog',
    },
  ];
  const settings = [
    {
      title: 'Profile',
      slug: 'profile',
    },
    {
      title: 'Account',
      slug: 'account',
    },
    {
      title: 'Dashboard',
      slug: 'dashboard',
    },
    {
      title: 'Logout',
      slug: 'logout',
    },
  ];

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.slug} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: 'inherit', textDecoration: 'none' }}>
                      <Link href={page.slug} className="no-underline text-black">
                        {page.title}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, i) => (
                <Button key={page.slug} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}>
                  <Link href={page.slug} key={i} className="no-underline text-white">
                    {page.title}
                  </Link>
                </Button>
              ))}
            </Box>

            <Badge badgeContent={props.cartItemsCount} color="warning" sx={{ marginRight: '30px' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
                sx={{ padding: 0 }}
              >
                <Link href="cart" className="no-underline text-white">
                  <ShoppingCart />
                </Link>
              </IconButton>
            </Badge>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, i) => (
                  <Link href={setting.slug} key={i}>
                    <MenuItem key={setting.slug} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" sx={{ display: 'block', textDecoration: 'none' }}>
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cartItemsCount: state.cart.data.length,
  };
};

export default connect(mapStateToProps, null)(BaseLayout);
