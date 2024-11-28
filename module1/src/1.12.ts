{
  //

  //nullable types / unknown type

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  //searchName('gopal')
  searchName(null);

  // unknown typeof
  //unknown is a similar of any, but safer alternative to any.
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" "); // value split kora por 1st value hoba result and 2nd value holo unit jaita destructuring kora hoycha
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^1`);
    } else {
      console.log("Wrong input");
    }
  };
  //getSpeedInMeterPerSecond(1000);
  getSpeedInMeterPerSecond(`1000 kmh^-1`);
  // getSpeedInMeterPerSecond(null);
  //getSpeedInMeterPerSecond(undefined);

  //never
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("amr vul hoya gacha");

  //
}
