'use client';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import * as React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Blog() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Blog One" {...a11yProps(0)} />
            <Tab label="Blog Two" {...a11yProps(1)} />
            <Tab label="Blog Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend nulla metus, fermentum semper metus vehicula at. In hac habitasse
          platea dictumst. Vivamus enim enim, iaculis id pretium vel, vulputate in elit. Nulla sagittis ligula lectus. Ut finibus sed eros aliquam
          elementum. Praesent eget consectetur risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ut
          nunc neque. Vestibulum placerat efficitur placerat. Pellentesque lacinia condimentum augue, a fermentum mi ornare ac.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Nulla tellus metus, pretium et tortor at, malesuada maximus nulla. Mauris ut magna lorem. Praesent semper nisl ac faucibus cursus. Donec ac
          tortor sollicitudin enim posuere aliquam quis in tellus. Morbi efficitur enim quis felis tristique viverra. Nullam vel nisl at quam euismod
          commodo. Aenean vitae lacus quis odio rutrum laoreet ut id neque. Vestibulum non interdum sapien, ullamcorper euismod dolor. Nam et
          consectetur lacus, accumsan fermentum nunc.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Fusce vehicula metus non mi finibus, ac iaculis sapien tincidunt. Sed tempus sagittis neque lobortis imperdiet. Fusce lobortis erat sed
          interdum commodo. In viverra dolor nulla, at pharetra magna tristique eget. Vivamus cursus quam non lectus posuere, sit amet sagittis magna
          mattis. Mauris ultrices laoreet metus at bibendum. Aenean ligula neque, lobortis vitae ornare at, condimentum non urna. Donec enim diam,
          egestas non massa nec, congue laoreet mauris. Sed rhoncus quam nec orci fermentum convallis. Nulla nec aliquam mauris. Quisque efficitur
          placerat consectetur. Aliquam id metus a odio rutrum sodales ac vitae nibh. Aliquam id magna vitae ante condimentum tristique. Mauris ut
          porta tellus, congue finibus sem.
        </CustomTabPanel>
      </Box>
    </div>
  );
}
