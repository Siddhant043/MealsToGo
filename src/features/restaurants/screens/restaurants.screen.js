import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

const Container = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const Search = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const List = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
  return (
    <>
      <Container>
        <Search>
          <Searchbar placeholder="Search" />
        </Search>
        <List>
          <RestaurantInfoCard />
        </List>
      </Container>
    </>
  );
};

export default RestaurantsScreen;
