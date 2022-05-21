import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Stack";


interface PricePanel {
    price: string;
    timestamp: string;
}

const PriceBlock = (props: PricePanel) => {
  const { price, timestamp } = props;
  return (
    <Box
      sx={{
        backgroundColor: "#000",
      }}
    >
      <Stack spacing={2} sx={{ color: "dodgerblue", p: 2 }}>
        <Typography>{price}</Typography>
        <Typography>{timestamp}</Typography>
      </Stack>
    </Box>
  );
};

export default PriceBlock;
