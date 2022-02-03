import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";
import { BookCard } from "../components/atoms/bookCard";
import { CustomText } from "../components/atoms/text";
const BoxContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: "100%",
  width: "100%",
  padding: "1em"
}));

function index() {
  return (
    <BoxContainer>
      <CustomText variant="h6">Volumes adicionados</CustomText>
      <Grid
        padding={"1em"}
        width={"100%"}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <BookCard
            name="Inuyasha"
            imgSrc="https://i.imgur.com/WH4gZga.png"
            edition="1° edição"
            publisher="Panini"
          />
        </Grid>
      </Grid>
    </BoxContainer>
  );
}

export default index;
