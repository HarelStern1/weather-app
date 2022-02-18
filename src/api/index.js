// handleClick
export const handleClick = async (value, callback1, callback2) => {
  const apiKey = "575c84b07a54f7dad7d8b153210c3058";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`;
  if (value) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data?.name && data?.main?.temp) {
        callback1((prev) => [...prev, data]);
      }
      callback2("");
    } catch (err) {
      console.log(err.message);
    }
  }
};
