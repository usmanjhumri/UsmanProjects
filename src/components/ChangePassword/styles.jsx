import Colors from "../colors";
const styles = {
  mainBox: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    fontFamily: "Be Vietnam Pro,sans-serif",
  },

  paperDiv: {
    boxShadow: "0px 0px 12.8px 2px rgba(0, 0, 0, 0.25);",
    borderRadius: "2px",
    maxWidth: 630,
  },
  innerPaperFlex: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "2px",
    flexDirection: "column",
    paddingBottom: 5,
  },
  logoDiv: {
    borderRadius: "2px",
    background: "#F8F9FA",
    width: "100%",
    justifyContent: "center",
    display: "flex",
    boxShadow: "0px 0px 1.8px 1px rgba(0, 0, 0, 0.25);",
  },

  equalMargin: {
    marginTop: 3,
    marginBottom: 3,
  },
  signFont: {
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  btnLoginWith: {
    width: "85%",
    color: Colors.black,
    border: "1px solid #D9D9D9",
    padding: "12px",
    borderRadius: "0px",
    fontFamily: "Be Vietnam Pro",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "capitalize",
    marginTop: 3,
  },
  typoLabel: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 3,
    marginBottom: 1,
  },
  typoLabel1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginTop: 3,
    marginBottom: 1,
    gap: 1,
  },
  signInBtn: {
    width: "90%",
    color: Colors.white,
    padding: "12px",
    borderRadius: "0px",
    fontFamily: "Be Vietnam Pro",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "capitalize",
    marginTop: 3,
    background: Colors.secondary,
    "&&:hover": {
      background: Colors.secondary,
    },
    formCenter: {
      textAlign: "center",
    },
    currentPassword: {
      paddingLeft: "30px",
    },
    currentPasswordError: {
      color: "red",
      margin: "0",
      paddingLeft: "15px",
      marginTop: "10px",
      textAlign: "left",
      fontSize: "14px",
    },
    errorsP: {
      color: "red",
      margin: "0",
      paddingLeft: "30px",
      marginTop: "10px",
      textAlign: "left",
      fontSize: "14px",
    },
  },
};
export default styles;
