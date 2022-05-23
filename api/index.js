const PORT = process.env.PORT || 4000;
import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import circularJSON from "circular-json";
import { load } from "cheerio";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());
// CONFIGS
app.disable("view cache");

axios.headers = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

// DATA

let tickerInfo = [];
let html,
  tickerLogo,
  ticker,
  price,
  twentyFourhr,
  sevenday,
  thirtyday,
  marketCap,
  volume24hr,
  last7days;
const exchanges = [
  {
    name: "coinmarketcap",
    address: "https://coinmarketcap.com/",
    endpoint: [
      {
        id: "map",
        url: "/v1/cryptocurrency/map",
      },
      {
        id: "home",
        url: "",
      },
      {
        id: "latest_listings",
        url: "/v1/cryptocurrency/listings/latest",
      },
      {
        id: "gainers",
        url: "gainers-losers/",
      },
      {
        id: "new",
        url: "new/",
      },
      {
        id: "most_viewed",
        url: "most-viewed-pages/",
      },
      {
        id: "trending",
        url: "trending-cryptocurrencies/",
      },
    ],
  },
];

// SCRAPERS

async function getCoinMarketTrending(res) {
    tickerInfo = [];
  html = res.data;
  let $ = load(html);
  $("table.cmc-table tbody tr", html).each((i, el) => {
    tickerLogo = $($(el).find("td")[2]).find("img").attr("src");
    ticker = $($(el).find("td")[2]).find("div > div > p").text();
    price = $($(el).find("td")[3]).text();
    twentyFourhr = $($(el).find("td")[4]).text();
    sevenday = $($(el).find("td")[5]).text();
    thirtyday = $($(el).find("td")[6]).text();
    marketCap = $($(el).find("td")[7]).text();
    volume24hr = $($(el).find("td")[8]).text();
    last7days = $($(el).find("td")[9]).find("img").attr("src");
    if (ticker !== "") {
      tickerInfo.push({
        tickerLogo,
        ticker,
        price,
        twentyFourhr,
        sevenday,
        thirtyday,
        marketCap,
        volume24hr,
        last7days,
      });
    } else {
      console.log("No ticker found");
    }
  });
}

// API METHODS
async function getCryptoInfo(cherrioFunction, exchange, endpoint) {
  try {
    const response = await axios.get(`${exchange}${endpoint}`);
    cherrioFunction(response);
  } catch (error) {
    console.log(error);
  }
}

// HANDLERS

async function exchangeSwap(req, res) {
  const exchangeId = req.params.exchangeId;
  const endpointId = req.params.endpointId;
  let source = exchanges
    .filter((s) => s.name == exchangeId)
    .map((a) => {
      return a.address;
    });

  let api = exchanges[0].endpoint
    .filter((x) => x.id == endpointId)
    .map((z) => {
      return z.url;
    });

  await getCryptoInfo(getCoinMarketTrending, source, api);
  res.send(tickerInfo);
}

// ROUTES

app.get("/", (req, res) => {
  res.json("Crypto prices API");
});

app.get("/crypto/:exchangeId/:endpointId", exchangeSwap);

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));