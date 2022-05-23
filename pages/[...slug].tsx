import axios from "axios";

import PriceBlock from "../components/price-block/PriceBlock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SideBar from "../components/side-bar/SideBar";

import { PageType, PageFactory} from './api/Factory'

const factory = new PageFactory()


export const getServerSideProps = async (pageContext: {
  query: { slug: any };
}) => {
  const pageSlug = pageContext.query.slug;
  const variables = {
    pageSlug,
  };

  const trending = factory.createPage(variables.pageSlug[1], PageType.ListCurrencies)

  const data = await trending.data();

  return {
    props: {
      data,
    },
  };
};

const Crypto = (props: any) => {
  const { data } = props;
 const tableColsLength:number =  Object.keys(data[0]).length -1;

  return (
    <Grid
      container
      direction={"row"}
      sx={{ alignItems: "stretch", height: "100vh", p: 0 }}
    >
      <Grid item sx={{ background: "#201D47", height: "100%", p: 4 }} lg={2}>
        <Box><SideBar/></Box>
      </Grid>
      <Grid item sx={{ background: "#17163B", height: "auto", p: 4 }} lg={10}>
        <Box sx={{ background: "#17163B", height: "100%"}}>
          {data.map((d: any) => (
            <PriceBlock
              key={d.key}
              last7days={d.last7days}
              marketCap={d.marketCap}
              price={d.price}
              sevenday={d.sevenday}
              thirtyday={d.thirtyday}
              ticker={d.ticker}
              tickerLogo={d.tickerLogo}
              twentyFourhr={d.twentyFourhr}
              volume24hr={d.volume24hr}
              tableColsNumber={tableColsLength}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Crypto;
