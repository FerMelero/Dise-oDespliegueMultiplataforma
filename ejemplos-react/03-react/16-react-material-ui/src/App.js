import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import MyMaterialForm from './Buttons';

function App() {
  const [visibleTab, setVisibleTab] = useState(0)
  const handleChange = (event, index) => {
    console.log(index)
    setVisibleTab(index);
  }

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={3} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Tab One" />
          <Tab label="Tab Two"  />
          <Tab label="Tab Three"  />
        </Tabs>
      </Box>
      { visibleTab === 0 && <div>Item One</div>}
      { visibleTab === 1 && <div>Item Two</div>}
      { visibleTab === 2 && <div>Item Three</div>}
      <MyMaterialForm />
    </div>
  );
}

export default App;
