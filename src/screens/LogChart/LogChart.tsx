import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { View, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LineChart } from 'react-native-chart-kit';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { LogChartStyles } from './LogChartStyle';
import { Navigation } from '../screan';
import { BACKEND_API_URI } from '@env';
import { Loading } from '../../components/Loading/Loading';

export const LogChart: React.FC<Navigation> = ({ navigation }) => {
  const userID = 2;
  const isFocused = useIsFocused();

  const [selectedValue, setSelectedValue] = useState<string>();
  const [apiDataWeight, setApiDataWeight] = useState<Array<ApiDataWeight>>();
  const [apiDataMeal, setApiDataMeal] = useState<Array<ApiDataOther>>();
  const [apiDataExercise, setApiDataExercise] = useState<Array<ApiDataOther>>();
  const [isLoading, setIsLoading] = useState(true);
  const [resultData, setResultData] = useState<ResultData>();

  type ApiDataWeight = {
    value: number;
    create_at: Date;
  };
  type ApiDataOther = {
    value: number;
    create_at: Date;
  };

  type ResultData = {
    [key: string]: {
      labels: Array<number>;
      datasets: Array<{ data: Array<number> }>;
    };
  };

  const getWeights = async () => {
    const url = `${BACKEND_API_URI}/weight?id=${userID}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setApiDataWeight(
          data.weights?.map((obj: ApiDataWeight) => {
            return {
              weight: Number(obj.value),
              create_at: new Date(obj.create_at),
            };
          }),
        );
      })
      .catch((e) => console.error(e));
    setIsLoading(false);
  };
  const getMealCalorie = async () => {
    const url = `${BACKEND_API_URI}/calorie?id=${userID}&calorie_type=0`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setApiDataExercise(
          data.calories?.map((obj: ApiDataOther) => {
            return {
              calory: Number(obj.value),
              create_at: new Date(obj.create_at),
            };
          }),
        );
      })
      .catch((e) => console.error(e));
    setIsLoading(false);
  };
  const getExerciseCalorie = async () => {
    const url = `${BACKEND_API_URI}/calorie?id=${userID}&calorie_type=1`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setApiDataMeal(
          data.calories?.map((obj: ApiDataOther) => {
            return {
              calory: Number(obj.value),
              create_at: new Date(obj.create_at),
            };
          }),
        );
      })
      .catch((e) => console.error(e));
  };
  const sortApiData = (
    apiData: Array<ApiDataWeight | ApiDataOther>,
  ): Array<ApiDataWeight | ApiDataOther> => {
    if (typeof apiData === 'undefined') return [];
    const sortedApiData = apiData.sort(
      (a: ApiDataWeight | ApiDataOther, b: ApiDataWeight | ApiDataOther) =>
        a.create_at?.getTime() - b.create_at?.getTime(),
    );
    return sortedApiData;
  };

  useEffect(() => {
    console.log('called');

    // Call only when screen open or when back on screen
    if (isFocused) {
      getWeights();
      getMealCalorie();
      getExerciseCalorie();
    }
  }, [isFocused]);

  useEffect(() => {
    if (
      typeof apiDataWeight === 'undefined' ||
      typeof apiDataExercise === 'undefined' ||
      typeof apiDataMeal === 'undefined'
    ) {
      return;
    }
    const sortedApiDataWeight = sortApiData(apiDataWeight);
    const sortedApiDataExercise = sortApiData(apiDataExercise);
    const sortedApiDataMeal = sortApiData(apiDataMeal);
    const between =
      sortedApiDataWeight[
        sortedApiDataWeight.length - 1
      ]?.create_at?.getTime() - sortedApiDataWeight[0]?.create_at?.getTime();
    const day = 1000 * 60 * 60 * 24; // 1日以下
    const judge = between < day;

    const weight = new Array(apiDataWeight?.length);
    const dateWeight = new Array(apiDataWeight?.length);
    const caloryExcercise = new Array(apiDataExercise?.length);
    const dateExercise = new Array(apiDataExercise?.length);
    const caloryMeal = new Array(apiDataMeal?.length);
    const dateMeal = new Array(apiDataMeal?.length);

    sortedApiDataWeight?.forEach((el, i) => {
      if (judge) {
        dateWeight[i] =
          el?.create_at?.getHours() + 'h' + el?.create_at?.getMinutes() + 'm';
      } else {
        dateWeight[i] =
          el?.create_at?.getMonth() + 1 + '/' + el?.create_at?.getDate();
      }
    });

    sortedApiDataExercise.forEach((el, i) => {
      caloryExcercise[i] = el?.value;
      dateExercise[i] =
        el?.create_at?.getMonth() + 1 + '/' + el?.create_at?.getDate();
    });

    apiDataMeal.forEach((el, i) => {
      caloryMeal[i] = el?.value;
      dateMeal[i] =
        el?.create_at?.getMonth() + 1 + '/' + el?.create_at?.getDate();
    });

    console.log(dateWeight, apiDataWeight);
    console.log(dateExercise, apiDataExercise);
    console.log(dateMeal, apiDataMeal);

    setResultData({
      exercise: {
        labels: dateExercise,
        datasets: [
          {
            data: apiDataExercise.map((el) => el.value),
          },
        ],
      },
      meal: {
        labels: dateMeal,
        datasets: [
          {
            data: apiDataMeal.map((el) => el.value),
          },
        ],
      },
      weight: {
        labels: dateWeight,
        datasets: [
          {
            data: apiDataWeight.map((el) => el.value),
          },
        ],
      },
    });
    setIsLoading(false);
  }, [apiDataExercise]);

  return (
    <View style={LogChartStyles.container}>
      {isLoading && typeof resultData !== 'undefined' ? (
        <Loading />
      ) : (
        <View>
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
              // HELPME : undefinedの時にも表示されてまう
              data={resultData[selectedValue]}
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
                labelColor: (opacity = 0.3) =>
                  `rgba(255, 255, 255, ${opacity})`,
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
            <ProcessButton
              content='もどる'
              onClick={() => navigation.goBack()}
            />
          </View>
        </View>
      )}
    </View>
  );
};
