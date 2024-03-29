import colors from "../colors";

const CategoriesStyle = {
  mainBox: {
    marginTop: { md: "5rem", xs: "4rem" },
    padding: { md: "0px 3rem", xs: "auto" },
  },
  CategoryTypo: {
    fontWeight: 600,
    fontSize: { md: "32px", xs: "20px" },
    color: colors.primary,
    fontFamily: "Be Vietnam Pro , sans-serif",

    textAlign: "center",
  },
  CategoryTypo2: {
    fontWeight: 400,
    fontSize: { md: "16px", xs: "14px" },
    color: "#000000",
    fontFamily: "Be Vietnam Pro , sans-serif",
    lineHeight: "23.38px",
    textAlign: "center",
  },

  AuthTypo: {
    fontWeight: 500,
    fontSize: { md: "32px", xs: "20px" },
    color: "#000000",
    fontFamily: "Be Vietnam Pro , sans-serif",
    lineHeight: "35.06px",
    textAlign: "center",
    margin: { md: "2rem 0px", xs: "auto" },
  },
  AuthTypo2: {
    fontWeight: 400,
    fontSize: { md: "16px", xs: "12px" },
    color: "#000000",
    fontFamily: "Be Vietnam Pro , sans-serif",
    lineHeight: "35.06px",
    textAlign: "center",
    marginBottom: "4rem",
  },
  BoxStyle: {
    boxShadow: " 0px 0px 15px 0px #0000001A",
    padding: "0.7rem",
    borderRadius: "15px",
  },
  ImgStyle: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "contain",
    aspectRatio: "4/2",
  },
  BoxTypo: {
    fontWeight: 500,
    fontSize: { md: "24px", xs: "18px" },
    color: "#000000",
    fontFamily: "Be Vietnam Pro , sans-serif",
    lineHeight: "20.45px",
    textAlign: "left",
    "@media (min-width: 900px)": {
      fontSize: "20px",
    },
  },
  BoxTypo2: {
    fontWeight: 500,
    fontSize: { md: "14px", xs: "12px" },
    color: "#000000",
    fontFamily: "Be Vietnam Pro , sans-serif",
    lineHeight: "20.45px",
    textAlign: "left",
  },
  PriceTypo: {
    fontWeight: 400,
    fontSize: { md: "18px", xs: "14px" },
    color: "#787878",
    fontFamily: "Be Vietnam Pro , sans-serif",
    lineHeight: "26.3px",
    textAlign: "left",
    textDecoration: "line-through",
  },
  PriceTypo2: {
    fontWeight: 500,
    fontSize: { md: "18px", xs: "14px" },
    color: colors.primary,
    fontFamily: "Be Vietnam Pro , sans-serif",
    lineHeight: "26.3px",
    textAlign: "left",
  },
  SalesTypo: {
    fontWeight: 400,
    fontSize: { md: "12px", xs: "12px" },
    color: "#787878",
    fontFamily: "Be Vietnam Pro , sans-serif",
    lineHeight: "26.3px",
    textAlign: "left",
  },
  flexContainer: {
    justifyContent: "space-around !important",
  },
  BtnStyle: {
    background: colors.primary,
    color: "#FFFFFF",
    padding: "0.4rem 0.6rem",
    textTransform: "capitalize",
    ":hover": {
      background: colors.primary,
    },
  },
  imgBoxDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default CategoriesStyle;
