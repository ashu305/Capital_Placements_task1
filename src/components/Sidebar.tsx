import { Avatar, Box, IconButton, styled } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";

const Sidebar = () => {
  return (
    <Wrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
        <IconButton>
          <HomeOutlinedIcon />
        </IconButton>
        <IconButton>
          <DocumentScannerOutlinedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Avatar
          sx={{
            backgroundColor: "primary.main",
            color: "#fff",
          }}
        >
          AS
        </Avatar>
      </Box>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100vh",
  width: "4rem",
  backgroundColor: "#fff",
  zIndex: 10,
});
