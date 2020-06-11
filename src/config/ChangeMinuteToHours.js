const ChangeMinuteToHours = (time) => {
  const hour = Math.floor(time / 60);
  const minute = time - hour * 60;
  const data = `${hour}h ${minute}m`;
  return data;
};

export default ChangeMinuteToHours;
