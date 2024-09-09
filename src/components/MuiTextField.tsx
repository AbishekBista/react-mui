import React from 'react'
import {Stack, TextField, InputAdornment} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'

import {useState} from 'react'

export const MuiTextField = () => {
    const[value, setValue] = useState('')
  return (
    <div>
        <Stack spacing={4} padding={5}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined' size='medium'/>
                <TextField label='Name' variant='filled' size='medium'/>
                <TextField label='Name' variant='standard' size='small'/>
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='small secondary' size='small' color='secondary'/>
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='small warning' color='success' size='small' required helperText={!value ? 'Required' : 'Do not show your password with anyone'} value={value} onChange={(e) => setValue(e.target.value)} error={!value}/>
                <TextField label='Password' color='warning' size='small' required helperText='Do not share your password' type='password' InputProps={{readOnly: true}}/>

                
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}/>
                <TextField label='Weight' InputProps={{endAdornment:<InputAdornment position='end'>kg</InputAdornment>}}/>
                <TextField label='Password' InputProps={{endAdornment:<InputAdornment position='end'><VisibilityIcon /></InputAdornment>}}/>
            </Stack> 
        </Stack>
    </div>
  )
}
