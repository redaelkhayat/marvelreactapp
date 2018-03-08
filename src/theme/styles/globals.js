const styles = {
  "@global": {
    "@import":
      "url('https://fonts.googleapis.com/css?family=Roboto:400,500,700')",
    "html, body, #app": {
      height: "100%"
    },
    body: {
      margin: 0,
      minWidth: 950,
      font: '15px/1.2 "Roboto"',
      color: "#fff",
      background: "#11121a"
    },
    "*": {
      boxSizing: "border-box",
      outline: "none"
    },
    a: {
      textDecoration: "none"
    },
    ul: {
      padding: 0,
      margin: 0,
      listStyle: "none",
      "&.inline": {
        "& > li": {
          float: "left",
          "& + li": {
            marginLeft: "0.25rem"
          }
        }
      }
    },
    "input, button": {
      font: "inherit"
    }
  }
};

export default styles;
