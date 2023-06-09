import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuBookOutlined from '@mui/icons-material/MenuBookOutlined';
import BasicModal from './Modal';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0, left: 0, right: 0 }}>
      
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <BasicModal>
                <BottomNavigationAction label="Book This Tour" icon={<MenuBookOutlined />} />
            </BasicModal>
        </BottomNavigation>
      
    </Box>
  );
}