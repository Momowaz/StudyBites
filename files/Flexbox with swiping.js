import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';

export default class App extends Component {
  render() {
    return (
      
      <View style={{ flex: 1, marginTop: 30 }}>
        {/*Example of Dot Indicator*/}
        <IndicatorViewPager
          style={{ height: 200 }}
          indicator={this._renderDotIndicator()}>
          <View
            style={{
              backgroundColor: '#00BFFF',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Tim Hortons</Text>
            <Image
        />
          </View>
          <View
            style={{
              backgroundColor: '#9370DB',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Grassroots</Text>
          </View>
          <View
            style={{
              backgroundColor: '#00FF00',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Three</Text>
          </View>
        </IndicatorViewPager>

        {/*Example of Title Indicator*/}
        <IndicatorViewPager
          style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}
          indicator={this._renderTitleIndicator()}>
          <View
            style={{
              backgroundColor: '#8A2BE2',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Title Indicator</Text>
            <Text style={{ color: 'white', fontSize: 30 }}>One</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FF5733',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Two</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFC300',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Three</Text>
          </View>
        </IndicatorViewPager>

        {/*Example of Tab Indicator*/}
        <IndicatorViewPager
          style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}
          indicator={this._renderTabIndicator()}>
          {/*_renderTabIndicator() will return the PagerTabIndicator*/}
          <View
            style={{
              backgroundColor: '#C70039',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Tab Indicator</Text>
            <Text style={{ color: 'white', fontSize: 30 }}>One</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FF5733',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Two</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFC300',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Three</Text>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }

  _renderTitleIndicator() {
    return <PagerTitleIndicator titles={['Page 1', 'Page 2', 'Page 3']} />;
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }
  _renderTabIndicator() {
    let tabs = [
      {
        text: 'Tab One',
      },
      {
        text: 'Tab Two',
      },
      {
        text: 'Tab Three',
      },
    ];
    return <PagerTabIndicator tabs={tabs} />;
  }
}
