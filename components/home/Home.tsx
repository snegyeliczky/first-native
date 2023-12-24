import { View, Text, Button } from "react-native";
import { profitStyle, styles } from "./styles";
import useHome, { BACKGROUND_TASK_NAME } from "./useHome";
import React from "react";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

const Home = () => {
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  const {
    lastExchange,
    editLastExchange,
    exchangeRate,
    getExchangeRate,
    sendNoti,
    registerBackgroundFetchAsync,
    unregisterBackgroundFetchAsync,
  } = useHome();

  React.useEffect(() => {
    checkStatusAsync();
  }, []);

  const checkStatusAsync = async () => {
    const status = await BackgroundFetch.getStatusAsync();
    const isRegistered = await TaskManager.isTaskRegisteredAsync(
      BACKGROUND_TASK_NAME
    );
    setStatus(status);
    setIsRegistered(isRegistered);
  };

  const toggleFetchTask = async () => {
    if (isRegistered) {
      await unregisterBackgroundFetchAsync();
    } else {
      await registerBackgroundFetchAsync();
    }

    checkStatusAsync();
  };

  const profit = Number(exchangeRate) - Number(lastExchange);

  return (
    <View style={styles.container}>
      {!isNaN(profit) && <Text style={profitStyle(profit)}>{profit}</Text>}
      <Text>Your last change: {lastExchange}</Text>
      <Text>current: {exchangeRate}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={"Change"}
          onPress={() => editLastExchange(exchangeRate)}
        />
        <Button title={"Refresh"} onPress={() => getExchangeRate()} />
        <Button title={"noti"} onPress={() => sendNoti()} />
      </View>
      <View style={styles.container}>
        <View>
          <Text>
            Background fetch status:{" "}
            <Text>
              {status && BackgroundFetch.BackgroundFetchStatus[status]}
            </Text>
          </Text>
          <Text>
            Background fetch task name:{" "}
            <Text>
              {isRegistered ? BACKGROUND_TASK_NAME : "Not registered yet!"}
            </Text>
          </Text>
        </View>
        <Button
          title={
            isRegistered
              ? "Unregister BackgroundFetch task"
              : "Register BackgroundFetch task"
          }
          onPress={toggleFetchTask}
        />
      </View>
    </View>
  );
};

export default Home;
