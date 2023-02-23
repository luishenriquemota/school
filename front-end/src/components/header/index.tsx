import { HeaderContentStyle, HeaderStyle } from "./style";

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {useNavigate} from "react-router-dom"
import { useUser } from "../../providers/user/user";

export function Header(){

  const navigate = useNavigate()

  return (
    <HeaderStyle>
      <div className="container">
        <HeaderContentStyle>
          <h1 onClick={() => navigate("/home")}>Logo</h1>
          <AccountMenu/>
        </HeaderContentStyle>
      </div>
    </HeaderStyle>
  )
}




function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const {token, setToken} = useUser()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

const handler = (e: React.MouseEvent<HTMLElement>) => {
  const event = e.currentTarget.id
  setAnchorEl(null);

  if(event === "login"){
    return navigate("/login")
  }
  return navigate("/register")
}

  const handlerLogout = () => {
    localStorage.clear()
    setToken("")
    navigate("/")
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
          >
            <Avatar sx={{ width: 42, height: 42 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            }
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      {token ? 
        <div>
        <MenuItem onClick={() => navigate("/home/my_courses/learning")}> 
        Meu aprendizado
      </MenuItem>
        <MenuItem onClick={() => handlerLogout()}>
        Logout
      </MenuItem>
      </div>
      :
      <div>
        <MenuItem id="login" onClick={(e) => handler(e)}>
          <Avatar /> Login
        </MenuItem>
        <MenuItem id="register" onClick={(e) => handler(e)}>
          <Avatar /> Cadastre-se
        </MenuItem>
      </div>
      }       
      </Menu>
    </React.Fragment>
  );
}