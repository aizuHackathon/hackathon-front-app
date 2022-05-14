import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
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
import { int32ARGBColor } from 'react-native-svg';

export const LogChart: React.FC<Navigation> = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState<string>('exercise');

  type ApiDataWeight = {
    weight: number;
    createdAt: Date;
  };
  type ApiDataOther = {
    calory: number;
    caloryType: number;
    createdAt: Date;
  };
  const apiDataWeight: Array<ApiDataWeight> = [
    {
      weight: 64.1,
      createdAt: new Date('December 10, 2022 03:20:00'),
    },
    {
      weight: 64.3,
      createdAt: new Date('December 10 2022 04:20:02'),
    },
    {
      weight: 61.2,
      createdAt: new Date('December 10, 2022 01:20:00'),
    },
    {
      weight: 59.5,
      createdAt: new Date('December 30, 2022 14:20:20'),
    },
    {
      weight: 61.6,
      createdAt: new Date('December 29, 2022 03:23:10'),
    },
  ];
  const apiDataOther: Array<ApiDataOther> = [
    {
      calory: 213,
      caloryType: 1,
      createdAt: new Date('December 10, 2022 03:20:00'),
    },
    {
      calory: 302,
      caloryType: 2,
      createdAt: new Date('December 10 2022 04:20:02'),
    },
    {
      calory: 412,
      caloryType: 3,
      createdAt: new Date('December 10, 2022 01:20:00'),
    },
    {
      calory: 176,
      caloryType: 1,
      createdAt: new Date('December 30, 2022 14:20:20'),
    },
    {
      calory: 213,
      caloryType: 1,
      createdAt: new Date('December 29, 2022 03:23:10'),
    },
  ];

  const sortedApiDataWeight = apiDataWeight.sort(
    (a: ApiDataWeight, b: ApiDataWeight) =>
      a.createdAt.getTime() - b.createdAt.getTime(),
  );
  //const sortedApiDataOther = apiDataOther.sort((a: ApiDataOther, b: ApiDataOther) => a.createdAt.getTime() - b.createdAt.getTime());
  const between =
    sortedApiDataWeight[sortedApiDataWeight.length - 1].createdAt.getTime() -
    sortedApiDataWeight[0].createdAt.getTime();
  let judge = 0;
  const day = 1000 * 60 * 60 * 24; // 1日以下
  if (between < day) {
    judge = 1;
  } else {
    judge = 2;
  }

  const weight: number[] = new Array(apiDataWeight.length);
  const date: string[] = new Array(apiDataWeight.length);
  for (let i = 0; i < apiDataWeight.length; i++) {
    weight[i] = apiDataWeight[i].weight;
    if (judge === 1) {
      date[i] =
        apiDataWeight[i].createdAt.getHours() +
        'h' +
        apiDataWeight[i].createdAt.getMinutes() +
        'm';
    } else {
      date[i] =
        apiDataWeight[i].createdAt.getMonth() +
        1 +
        '/' +
        apiDataWeight[i].createdAt.getDate();
    }
  }

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
    weight: {
      labels: date,
      datasets: [
        {
          data: weight,
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
          <Picker.Item label='体重' value='weight' />
        </Picker>
      </View>
      <View style={LogChartStyles.LogChartContainer}>
        <LineChart
          data={sampleData[selectedValue]}
          width={Dimensions.get('window').width - 20} // from react-native
          height={220}
          // yAxisSuffix='k'
          yAxisSuffix={selectedValue === 'weight' ? 'kg' : 'k'}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#E7C0C0',
            backgroundGradientFrom: '#bfa2a2',
            backgroundGradientTo: '#bfa2a2',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 0.3) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 0.3) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '3',
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
