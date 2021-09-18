import * as React from "react";

import { Grid } from "@chakra-ui/layout";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

export const SearchBar = () => {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <SearchInput />
      <SearchButton />
    </Grid>
  );
};
