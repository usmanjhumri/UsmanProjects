import Colors from "../colors";
const Styles = {
  mainBox: {
    marginTop: { md: "20rem", xs: "15rem" },
    padding: { md: "0px 3rem", xs: "0px" },
  },
  AuthTypo: {
    fontWeight: 600,
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
    textAlign: "center",

    maxWidth: "650px",
    margin: "0.8rem auto",
  },
  BoxStyle: {
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
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
  imgBoxDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  },
  PriceTypo2: {
    fontWeight: 500,
    fontSize: { md: "18px", xs: "14px" },
    color: Colors.primary,
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
  BtnStyle: {
    background: Colors.primary,
    color: "#FFFFFF",
    padding: "0.4rem 0.6rem",
    textTransform: "capitalize",
    ":hover": {
      background: Colors.primary,
    },
  },
  CategoriesText: {
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Be Vietnam Pro , sans-serif",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    color: Colors.primary,
  },
  labelColor: {
    color: "red",
  },
};
export default Styles;
