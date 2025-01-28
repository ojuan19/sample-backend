export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}.${milliseconds < 100 ? `0${milliseconds}` : milliseconds}`;
};
