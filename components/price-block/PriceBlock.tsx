import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Stack";

interface PricePanel {
  last7days: string;
  marketCap: string;
  price: string;
  sevenday: string;
  thirtyday: string;
  ticker: string;
  tickerLogo: string;
  twentyFourhr: string;
  volume24hr: string;
  tableColsNumber: number;
}

const PriceBlock = (props: PricePanel) => {
  const {
    last7days,
    marketCap,
    price,
    sevenday,
    thirtyday,
    ticker,
    tickerLogo,
    twentyFourhr,
    volume24hr,
    tableColsNumber
  } = props;
  return (
    <Box
      sx={{
        backgroundColor: "#13113E",
        color: "#7877B1",
        transition: 'ease-in-out 0.2s all',
        "&:hover": {
          color: "#fff",
          background: "rgba(11, 152, 197, 0.1);",
          cursor:'pointer'
        },
        p: 1,
        border: '1px solid #201D47'
      }}
    >
      <Box display="grid" gridTemplateColumns={`repeat(${tableColsNumber}, 1fr)`} gap={2} sx={{alignItems: "center"}}>
        <Box gridColumn="span 1" sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <CardMedia
            component="img"
            image={tickerLogo}
            alt={ticker}
            sx={{ width: "40px", height: "40px", pr:1 }}
          />
    
          <Typography>{ticker}</Typography>
        </Box>
        <Box>
          <Typography>{price}</Typography>
        </Box>
        <Box>
          <Typography>{twentyFourhr}</Typography>
        </Box>
        <Box>
          <Typography>{sevenday}</Typography>
        </Box>
        <Box>
          <Typography>{thirtyday}</Typography>
        </Box>
        <Box>
          <Typography>{marketCap}</Typography>
        </Box>
        { last7days && (<Box>
          <CardMedia
            component="img"
            height="40px"
            image={last7days}
            alt={ticker}
            sx={{
              objectFit: "contain",
              filter: "hue-rotate(263deg)",
              width: "auto",
            }}
          />
        </Box>) }
        <Box>
          <Typography>{volume24hr}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceBlock;
