import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LineChart } from 'react-native-chart-kit';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { LogChartStyles } from './LosChartStyle';
import { Navigation } from '../screan';
import { BACKEND_API_URI } from '@env';

export const LogChart: React.FC<Navigation> = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('exercise');

  type ApiDataWeight = {
    weight: number;
    createdAt: Date;
  };
  type ApiDataOther = {
    calory: number;
    caloryType: number;
    createdAt: Date;
  };
  const getWeights = async () => {
    const url = `${BACKEND_API_URI}/weight?id=2`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => console.error(e));
  };
  useEffect(() => {
    getWeights();
  });
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
  const apiDataExercise: Array<ApiDataOther> = [
    {
      calory: 43,
      caloryType: 1,
      createdAt: new Date('December 10, 2022 03:20:00'),
    },
    {
      calory: 54,
      caloryType: 2,
      createdAt: new Date('December 11 2022 04:20:02'),
    },
    {
      calory: 31,
      caloryType: 3,
      createdAt: new Date('December 13, 2022 01:20:00'),
    },
    {
      calory: 71,
      caloryType: 1,
      createdAt: new Date('December 21, 2022 14:20:20'),
    },
    {
      calory: 44,
      caloryType: 1,
      createdAt: new Date('December 29, 2022 03:23:10'),
    },
  ];
  const apiDataMeal: Array<ApiDataOther> = [
    {
      calory: 213,
      caloryType: 1,
      createdAt: new Date('December 10, 2022 20:20:00'),
    },
    {
      calory: 302,
      caloryType: 2,
      createdAt: new Date('December 10 2022 13:20:02'),
    },
    {
      calory: 412,
      caloryType: 3,
      createdAt: new Date('December 10, 2022 07:20:00'),
    },
    {
      calory: 176,
      caloryType: 1,
      createdAt: new Date('December 11, 2022 12:20:20'),
    },
    {
      calory: 213,
      caloryType: 1,
      createdAt: new Date('December 11, 2022 18:23:10'),
    },
  ];

  const sortedApiDataWeight = apiDataWeight.sort(
    (a: ApiDataWeight, b: ApiDataWeight) =>
      a.createdAt.getTime() - b.createdAt.getTime(),
  );
  const sortedApiDataExercise = apiDataExercise.sort(
    (a: ApiDataOther, b: ApiDataOther) =>
      a.createdAt.getTime() - b.createdAt.getTime(),
  );
  const sortedApiDataMeal = apiDataMeal.sort(
    (a: ApiDataOther, b: ApiDataOther) =>
      a.createdAt.getTime() - b.createdAt.getTime(),
  );
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

  const weight = new Array(apiDataWeight.length);
  const dateWeight = new Array(apiDataWeight.length);
  const caloryExcercise = new Array(apiDataExercise.length);
  const dateExercise = new Array(apiDataExercise.length);
  const caloryMeal = new Array(apiDataMeal.length);
  const dateMeal = new Array(apiDataMeal.length);

  for (let i = 0; i < apiDataWeight.length; i++) {
    weight[i] = apiDataWeight[i].weight;
    if (judge === 1) {
      dateWeight[i] =
        sortedApiDataWeight[i].createdAt.getHours() +
        'h' +
        sortedApiDataWeight[i].createdAt.getMinutes() +
        'm';
    } else {
      dateWeight[i] =
        sortedApiDataWeight[i].createdAt.getMonth() +
        1 +
        '/' +
        sortedApiDataWeight[i].createdAt.getDate();
    }
  }

  for (let i = 0; i < apiDataExercise.length; i++) {
    caloryExcercise[i] = sortedApiDataExercise[i].calory;
    dateExercise[i] =
      sortedApiDataExercise[i].createdAt.getMonth() +
      1 +
      '/' +
      sortedApiDataExercise[i].createdAt.getDate();

    caloryMeal[i] = sortedApiDataMeal[i].calory;
    dateMeal[i] =
      sortedApiDataMeal[i].createdAt.getMonth() +
      1 +
      '/' +
      sortedApiDataMeal[i].createdAt.getDate();
  }

  const sampleData = {
    exercise: {
      labels: dateExercise,
      datasets: [
        {
          data: caloryExcercise,
        },
      ],
    },
    meal: {
      labels: dateMeal,
      datasets: [
        {
          data: caloryMeal,
        },
      ],
    },
    weight: {
      labels: dateWeight,
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
          onValueChange={(itemValue: string) => setSelectedValue(itemValue)}
        >
          <Picker.Item label='運動' value='exercise' />
          <Picker.Item label='食事' value='meal' />
          <Picker.Item label='体重' value='weight' />
        </Picker>
      </View>
      <View style={LogChartStyles.LogChartContainer}>
        <LineChart
          // @ts-expect-error この書き方は良くないがsampleなので許容する、本番はtserrorが出ないようにお願いします
          data={sampleData[selectedValue]}
          width={Dimensions.get('window').width - 20} // from react-native
          height={220}
          yAxisSuffix={selectedValue === 'weight' ? 'kg' : 'kcal'}
          yAxisInterval={1} // optional, defaults to 1
          segments={5}
          yLabelsOffset={selectedValue === 'weight' ? 10 : 7}
          chartConfig={{
            backgroundColor: '#E7C0C0',
            backgroundGradientFrom: '#bfa2a2',
            backgroundGradientTo: '#bfa2a2',
            decimalPlaces: 1, // optional, defaults to 2dp
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
