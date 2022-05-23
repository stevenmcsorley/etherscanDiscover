import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

const SideBar = () => {
  return (
    <Stack>
      <Link href={`trending`} sx={{mb: 2, p:2, background: '#1C1A43', '&:hover':{color: '#40DDFF'}}}>Trending</Link>
      <Link href={"new"} sx={{mb: 2, p:2, background: '#1C1A43', '&:hover':{color: '#40DDFF'}}}>New</Link>
      <Link href={"most_viewed"} sx={{mb: 2, p:2, background: '#1C1A43', '&:hover':{color: '#40DDFF'}}}>Most Viewed</Link>
    </Stack>
  );
};

export default SideBar;
