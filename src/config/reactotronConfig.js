import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({
    enable: true,
    host: 'localhost',
    port: 9090,
  })
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
