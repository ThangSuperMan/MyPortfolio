import react from "react";

const Footer = () => {
  const style = {
    color: "#B0ACA7",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "300",
  };

  return (
    <div className="Footer" style={{ marginBottom: "32px" }}>
      <h5 style={style}>© 2021 Phan Tan Thang. All Rights Reserverd.</h5>
    </div>
  );
};

export default Footer;
