import { Grid, TextField } from '@mui/material'
import React from 'react'

type Props = {}

const SearchData = (props: Props) => {
  return (
    <div className='p-6'>
      <Grid container spacing={2}>
        <TextField id="outlined-basic" label="Name" variant="outlined" size='small'/>
      </Grid>
    </div>
  )
}

export default SearchData