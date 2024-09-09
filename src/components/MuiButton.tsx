import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

import {useState} from 'react'


export const MuiButton = () => {

    const[formats, setFormats] = useState<string | null>(null)
    console.log(formats,)

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats)
    }
  return (
    <Stack spacing={4} padding={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://www.google.com'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='outlined' color='primary'>Primary</Button>
            <Button variant='outlined' color='secondary'>Secondary</Button>
            <Button variant='outlined' color='error'>Error</Button>
            <Button variant='outlined' color='warning'>Warning</Button>
            <Button variant='outlined' color='success'>Success</Button>
            <Button variant='outlined' color='info'>Info</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon />} disableElevation disableRipple onClick={() => alert("clicked")}>Send</Button>
            <IconButton aria-label='send-button' color='success' size='small'><SendIcon /></IconButton>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup variant='contained' orientation='vertical' size='large' color='error' aria-label='alignment button group'>
            <Button onClick={() => alert("Left")}>Left</Button>
            <Button onClick={() => alert("center")}>Center</Button>
            <Button onClick={() => alert("right")}>Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange} size='large' color='warning' orientation='vertical' exclusive>
                <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
                <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
            </ToggleButtonGroup>

        </Stack>


    </Stack>
  )
}
