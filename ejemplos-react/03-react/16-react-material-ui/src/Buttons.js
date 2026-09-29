import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';

function MyMaterialForm () {
    return (
        <div>
        <h3>Buttons</h3>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
              />
            </div>
            <Button variant="contained">Go Home<HomeIcon fontSize="small" /></Button>
          </Box>
        </div>
    )
}

export default MyMaterialForm;