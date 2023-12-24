import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { change } from "../../constants/storageKey";
import { FIXER_ACCESS_KEY } from "@env";
import * as Notifications from "expo-notifications";
import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";
export const BACKGROUND_TASK_NAME = "first-task";

const UseHome = () => {
  const accessKey = FIXER_ACCESS_KEY;
  const [lastExchange, setLastExchange] = useState<string>();
  const [exchangeRate, setExchangeRate] = useState();

  TaskManager.defineTask(BACKGROUND_TASK_NAME, async ({ error }) => {
    if (error) {
      console.error("Background task error:", error);
      return;
    }
    const now = Date.now();

    console.log(
      `Got background fetch call at date: ${new Date(now).toISOString()}`
    );
    sendNoti();
    return BackgroundFetch.BackgroundFetchResult.NewData;
  });

  async function registerBackgroundFetchAsync() {
    BackgroundFetch.setMinimumIntervalAsync(1);
    console.log("rgister");
    return BackgroundFetch.registerTaskAsync(BACKGROUND_TASK_NAME, {
      minimumInterval: 1 * 60,
      stopOnTerminate: false, // android only,
      startOnBoot: true, // android only
    });
  }

  async function unregisterBackgroundFetchAsync() {
    console.log("delet register");
    return BackgroundFetch.unregisterTaskAsync(BACKGROUND_TASK_NAME);
  }

  const getLastExchange = async () => {
    try {
      const value = await AsyncStorage.getItem(change);
      setLastExchange(value);
    } catch (e) {
      console.log("last exchange not found: ", e);
    }
  };

  const getExchangeRate = async () => {
    try {
      const fixerResponse = await fetch(
        `http://data.fixer.io/api/latest?access_key=${accessKey}&base=EUR&symbols=HUF`
      );
      const jsonRes = await fixerResponse.json();
      setExchangeRate(jsonRes.rates.HUF);
    } catch (e) {
      console.log("Don`t get exchange rate: ", e);
    }
  };

  const editLastExchange = async (value: number) => {
    try {
      await AsyncStorage.setItem(change, value.toString());
      setLastExchange(value.toString());
    } catch (e) {
      console.log("unable to store data: ", e);
    }
  };

  const sendNoti = () => {
    try {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "My Notification Title",
          body: "This is the body text of the notification",
        },
        trigger: null,
      });
    } catch (err) {
      console.log("Something happend:( ", err);
    }
  };

  useEffect(() => {
    getLastExchange();
    // getExchangeRate()
  }, []);

  return {
    editLastExchange,
    getExchangeRate,
    lastExchange,
    exchangeRate,
    sendNoti,
    registerBackgroundFetchAsync,
    unregisterBackgroundFetchAsync,
  };
};

export default UseHome;