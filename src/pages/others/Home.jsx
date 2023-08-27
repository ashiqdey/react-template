import { styled } from "@mui/material/styles";
// components
import { Page } from "../../components";
import { HEADER } from "../../constants/configs";

// ----------------------------------------
const RootStyle = styled("div")(({theme}) => ({
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

export default function Page404() {
  return (
    <Page title="Home page">
      <RootStyle>home</RootStyle>
    </Page>
  );
}
