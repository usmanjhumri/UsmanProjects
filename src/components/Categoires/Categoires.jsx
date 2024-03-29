/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useMemo } from "react";
import {
  Box,
  Typography,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Skeleton,
  Slider,
} from "@mui/material";
import Styles from "./Styles";
import { useParams } from "react-router-dom";
import Cards from "../Cards";
import { useSelector } from "react-redux";
const Categoires = () => {
  const [product, setProduct] = useState([]);
  const [subCatgeory, setSubCatgeory] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const params = useParams();
  const categoriesProduct = useSelector((state) =>
    state?.home?.catergories.find((item) => item.id == params.id)
  );
  const isLoading = useSelector((state) => state?.home?.isLoading);

  useMemo(() => {
    setProduct(categoriesProduct?.products);
    setSubCatgeory(categoriesProduct?.subcategories);
    setPriceRange([0, 1000]);
  }, [categoriesProduct, params]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCheckBox = (e) => {
    const subCategoryId = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      // Add to the selected subcategories array
      setSelectedSubcategories((prev) => [...prev, subCategoryId]);
    } else {
      // Remove from the selected subcategories array
      setSelectedSubcategories((prev) =>
        prev.filter((id) => id !== subCategoryId)
      );
    }
  };
  useMemo(() => {
    // Filter products based on selected subcategories
    let subcategoryFilteredProducts = categoriesProduct?.products;
    if (selectedSubcategories.length > 0) {
      subcategoryFilteredProducts = subcategoryFilteredProducts.filter(
        (item) =>
          selectedSubcategories.includes(item.sub_category_id.toString()) &&
          Number(item.regular_price).toFixed(0) >= priceRange[0] &&
          Number(item.regular_price).toFixed(0) <= priceRange[1]
      );
    }

    // Filter products based on price range
    const priceRangeFilteredProducts = subcategoryFilteredProducts?.filter(
      (item) =>
        Number(item.regular_price).toFixed(0) >= priceRange[0] &&
        Number(item.regular_price).toFixed(0) <= priceRange[1]
    );

    // Set the final filtered products
    setProduct(
      priceRangeFilteredProducts?.length > 0
        ? priceRangeFilteredProducts
        : subcategoryFilteredProducts
    );
  }, [selectedSubcategories, priceRange]);

  return (
    <div className="height-footer">
      <Box sx={{ mt: 2 }}>
        <Typography sx={Styles.CatHeading}>{params.name}</Typography>
        <Typography sx={Styles.CatSubHeading}>
          Designed to meet the diverse needs of entrepreneurs, creatives, and
          professionals alike, our Featured Products are more than just tools
          they're catalysts for success.
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          maxWidth: { md: "100%", xs: "auto" },
        }}
        spacing={2}
      >
        <Grid item xs={12} md={2}>
          {isLoading ? (
            <Box sx={{ width: 250, paddingLeft: 5 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </Box>
          ) : (
            <Box sx={Styles.categoriesStyle}>
              <Typography sx={Styles.filterRefine}>Filter</Typography>
              <Typography sx={Styles.SubCatHeading}>Sub Catogories</Typography>

              <FormGroup sx={Styles.formCenter}>
                {subCatgeory?.map((item) => (
                  <FormControlLabel
                    key={item.id}
                    control={<Checkbox onClick={handleCheckBox} />}
                    label={item.name}
                    value={item.id}
                    sx={Styles.CheckBoxLabel}
                  />
                ))}
              </FormGroup>
            </Box>
          )}
        </Grid>

        <Grid item md={10}>
          <Cards data={product ? product : []} isLoading={isLoading} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Categoires;
