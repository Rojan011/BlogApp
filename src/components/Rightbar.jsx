import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Dustin Porier"
            src="https://www.sherdog.com/image_crop/200/300/_images/fighter/1601262923Dustin_Poirier.jpg"
          />
          <Avatar
            alt="Phil Salt"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTees37D2IYR-CEznmQH9KVq_n41MBp4gLqtOKM4Ibboe8CKYhI"
          />
          <Avatar
            alt="Travis Barker"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGUrZULoBwMJuBhuEcwIR7uD4zk_w30l99xoFdpvwwdh_66iFd9hhM6QoGnsRdP3N7jJbqVOaftIyraDVmcO-oSFYN9lT5sWQd7jFr5AI"
          />
          <Avatar alt="Rojan Shrestha" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Noah" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FQ0Gf581UREUDCJHN5yJ2nR_cVMRg0cyrg&s"
              alt="Volk Knocked"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://sportsbyte.sunderland.ac.uk/wp-content/uploads/2023/05/1416166644.0-scaled.jpg"
              alt="Volk Knocked"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-04/GettyImages-2148568365_resized.jpg?itok=nRVMBYW-"
              alt="Volk Knocked"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Updates
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Uncle Chael"
                src="https://phantom-marca.unidadeditorial.es/230657e77af4d9c212489955ba9665da/crop/0x105/2046x1469/resize/828/f/jpg/assets/multimedia/imagenes/2023/11/22/17006867896185.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="I Can't Let You Get Close"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                   to Anderson Silva
                  </Typography>
                  {
                    " -I don't walk around looking into cameras and telling people I'm the best fighter in the world just to hear myself talk. I say it for the same reason they put warnings on packages of cigarettes, and fighting Chael Sonnen may be hazardous to one's health."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
