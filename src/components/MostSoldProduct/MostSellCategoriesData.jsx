/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

import { Box, Button, Grid, Typography } from "@mui/material";
import "./categories.css";
import CategoriesStyle from "./style";
import { Link } from "react-router-dom";
export default function MostSellCategoriesData({ filterProduct }) {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ width: { md: "90%", xs: "auto" } }}
        margin="auto"
      >
        {filterProduct?.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={CategoriesStyle.BoxStyle}>
              <Link
                to={`/product/${item.category_id}/${item.name
                  .toLowerCase()
                  .replace(/[\s-]/g, "-")}/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Box sx={CategoriesStyle.imgBoxDiv}>
                  <Box
                    component="img"
                    src={`https://marketplace.jdfunnel.com/assets/images/product/${item.image}`}
                    sx={CategoriesStyle.ImgStyle}
                  />
                </Box>

                <Typography mt={2} sx={CategoriesStyle.BoxTypo}>
                  {item.name}
                </Typography>

                <Box mt={2} sx={{ display: "flex", gap: 2 }}>
                  <Typography sx={CategoriesStyle.PriceTypo}>
                    ${Number(item.extended_price).toFixed(2)}
                  </Typography>
                  <Typography sx={CategoriesStyle.PriceTypo2}>
                    ${Number(item.regular_price).toFixed(2)}
                  </Typography>
                </Box>

                <Box
                  mt={4}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={CategoriesStyle.SalesTypo}>
                    {item.total_sell} Sales
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <a href={item.demo_link} target="_blank">
                      <Button sx={CategoriesStyle.BtnStyle}>
                        Live Preview
                      </Button>
                    </a>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
