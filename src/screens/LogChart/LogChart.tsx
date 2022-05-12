import React, { useEffect, useState, Component } from 'react';
import { View, Picker, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { LogChartStyles } from './LosChartStyle';
import { Navigation } from '../screan';

export const LogChart: React.FC<Navigation> = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState<string>('exercise');

  const sampleData = {
    exercise: {
      labels: ['AAA', 'BBB', 'CCC'],
      datasets: [
        {
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
        },
      ],
    },
    meal: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ],
        },
      ],
    },
  };
  return (
    <View style={LogChartStyles.container}>
      <View style={LogChartStyles.LogChartHeaderContainer}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue: string, itemIndex: number) =>
            setSelectedValue(itemValue)
          }
        >
          <Picker.Item label='運動' value='exercise' />
          <Picker.Item label='食事' value='meal' />
        </Picker>
      </View>
      <View style={LogChartStyles.LogChartContainer}>
        <LineChart
          data={sampleData[selectedValue]}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel='$'
          yAxisSuffix='k'
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#E7C0C0',
            backgroundGradientFrom: '#E7C0C0',
            backgroundGradientTo: '#E7C0C0',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 0.3) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 0.3) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '4',
              stroke: '#FFE5A3',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={LogChartStyles.footerContainer}>
        <ProcessButton content='もどる' onClick={() => navigation.goBack()} />
      </View>
    </View>
  );
};
