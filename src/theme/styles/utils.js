import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

// space between grid columns
const gutter = 15;

const styles = {
  // typography
  uppercase: { "text-transform": "uppercase" },
  bold: { fontWeight: 700 },
  lighter: { fontWeight: 400 },
  small: { fontSize: "90%" },
  // grids
  cols: {
    margin: `2rem -${gutter}px`
  },
  col: {
    float: "left",
    padding: `0 ${gutter}px`
  },
  oneThird: {
    width: `${100 / 3}%`
  },
  twoThird: {
    width: `${100 * 2 / 3}%`
  },
  oneFourth: {
    width: `${100 / 4}%`
  },
  oneFifth: {
    width: `${100 / 5}%`
  },
  clear: {
    clear: "both",
    display: "block",
    height: 0,
    visibility: "hidden"
  },
  // flx
  flex: { display: "flex" },
  flexRows: { "flex-direction": "row" },
  flexColumns: { "flex-direction": "column" },
  itemsCenter: { alignItems: "center" },
  justifySpaceBetween: { "justify-content": "space-between" },
  flex1: { flex: 1 },
  // others
  animated: { transition: ".3s ease-in-out" }
};

export default jss.createStyleSheet(styles).attach().classes;
