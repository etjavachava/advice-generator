import { useState } from 'react';
import { fetchQuote, type Quote } from './api/quotesgenerator';
import { Box, Button, Typography, CircularProgress } from '@mui/material';

export function FetchButton(){
    const [quote, setQuote] = useState<Quote | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleFetch = async () => {
        setLoading(true);
        setError(false);
        try {
            const data = await fetchQuote();
            setQuote(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return(<>
    <Box sx={{display:"flex", flexDirection: "column", alignItems:"center", justifyContent:"center", height:'100vh', gap: 4, p: 2}}> 
        <Button variant="contained" color="primary" onClick={handleFetch} disabled={loading}>
            {loading ? "Fetching..." : "Fetch Quote"}
        </Button> 

        {loading && <CircularProgress size={24} />}

        {error && <Typography color="error">Failed to fetch quote. Please try again.</Typography>}

        {quote && !loading && (
            <Box sx={{ textAlign: "center", maxWidth: "600px", color: "blueviolet" }}>
                <Typography variant="h5" component="p" gutterBottom>"{quote.content}"</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>- {quote.originator.name}</Typography>
            </Box>
        )}
    </Box>
    </>)
}