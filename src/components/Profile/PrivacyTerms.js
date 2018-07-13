import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import {Button, Index} from '../common';
import goStyles from "../../Styling/goStyles";
import PrivacyPolicy from "./assets/PrivacyPolicy";
import Terms from "./assets/Terms";

const PrivacyTerms = () => {

  return (
    <ScrollView style={{ paddingHorizontal: 20 }}>
      <PrivacyPolicy />
      <Terms />
    </ScrollView>
  );

};

export default PrivacyTerms;
