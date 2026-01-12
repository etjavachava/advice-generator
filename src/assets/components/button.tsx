import { useState } from 'react';
import { fetchQuote } from './api/quotesgenerator';
import { Box, Button } from '@mui/material';

export function FetchButton(){
    const [quote, setQuote] = useState<any>(null);

    const handleFetch = async () => {
        const data = await fetchQuote();
        setQuote(data);
    };

    return(<>
    <Box sx={{display:"flex",alignItems:"center", justifyContent:"center",height:'100vh',color:"blueviolet"}}> 
 <Button variant="contained" color="primary" onClick={handleFetch} >
  Fetch
 </Button> 
    {quote && <p >{quote.content}</p>}
    </Box>
    </>)
}