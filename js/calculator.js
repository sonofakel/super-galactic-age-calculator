var moment = require('moment');

export class Calculator {
constructor () {
}

ageInSeconds(age) {
  let secondsInYear = (age * 31536000);
  return secondsInYear;
}

secondsBetweenTwoDates(date1,date2) {
  let a = moment(date1);
  let b = moment(date2);
  let result = a.diff(b, 'seconds');

  return result;

}

ageInYearsOnMercury(age) {
  let ageOnMercury = (Math.floor(age / .24));

  return ageOnMercury;
}

ageInYearsOnVenus(age) {
  let ageOnVenus = (Math.floor(age / .62));

  return ageOnVenus;
}

ageInYearsOnMars(age) {
  let ageOnMars = (Math.floor(age / 1.88 ));

  return ageOnMars;
}

ageInYearsOnJupiter(age) {
  let ageOnJupiter = (Math.floor(age / 11.86 ));

  return ageOnJupiter;
}


lifeExpectOnPlanet(age,sex,continent,planet) {


  if (sex === "male" && continent === "North America" || "Europe" && planet === "Mercury") {
    let lifeExpect = 77;
    let leftOnEarth = (lifeExpect - age);
    return (Math.floor(leftOnEarth /.24));
  } else if (sex === "female" && continent == "North America" || "Europe" && planet ==="Mercury") {
      let lifeExpect = 81;
      let leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth /.24));

  } else if (sex === "male" && continent == "Oceania" || "Latin America" && planet ==="Mercury") {
      let lifeExpect = 73;
      let leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth /.24));
  } else if (sex === "female" && continent == "Oceania" || "Latin America" && planet ==="Mercury") {
      let lifeExpect = 79;
      let leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth /.24));

  } else if (sex === "male" && continent == "Asia" || "Africa" && planet ==="Mercury") {
      let lifeExpect = 65;
      let leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth /.24));
  } else if (sex === "female" && continent == "Asia" || "Africa" && planet ==="Mercury") {
      let lifeExpect = 70;
      let leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth /.24));



  } else if (sex === "male" && continent === "North America" || "Europe" && planet === "Venus") {
    let lifeExpect = 77;
    let leftOnEarth = (lifeExpect - age);
    return (Math.floor(leftOnEarth /.62));

  } else if (sex === "female" && continent == "North America" || "Europe" && planet ==="Venus") {
      let lifeExpect = 81;
      let leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth /.62));

  } else if (sex === "male" && continent == "Oceania" || "Latin America" && planet ==="Venus") {
      let lifeExpect = 73;
      let leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth /.62));
  } else if (sex === "female" && continent == "Oceania" || "Latin America" && planet ==="Venus") {
      let lifeExpect = 79;
      let leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth /.62));

  } else if (sex === "male" && continent == "Asia" || "Africa" && planet ==="Venus") {
      let lifeExpect = 65;
      let leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth /.62));
  } else if (sex === "female" && continent == "Asia" || "Africa" && planet ==="Venus") {
      let lifeExpect = 70;
      let leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth /.62));



    } else if (sex === "male" && continent === "North America" || "Europe" && planet === "Mars") {
      let lifeExpect = 77;
      let leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth /1.88));
    } else if (sex === "female" && continent == "North America" || "Europe" && planet ==="Mars") {
        let lifeExpect = 81;
        let leftOnEarth = (lifeExpect - age);
        return (Math.floor(leftOnEarth /1.88));

    } else if (sex === "male" && continent == "Oceania" || "Latin America" && planet ==="Mars") {
        let lifeExpect = 73;
        let leftOnEarth = (lifeExpect - age);
        return (Math.floor(leftOnEarth /1.88));
    } else if (sex === "female" && continent == "Oceania" || "Latin America" && planet ==="Mars") {
        let lifeExpect = 79;
        let leftOnEarth = (lifeExpect - age);
        return (Math.floor(leftOnEarth /1.88));

    } else if (sex === "male" && continent == "Asia" || "Africa" && planet ==="Mars") {
        let lifeExpect = 65;
        let leftOnEarth = (lifeExpect - age);
        return (Math.floor(leftOnEarth /1.88));
    } else if (sex === "female" && continent == "Asia" || "Africa" && planet ==="Mars") {
        let lifeExpect = 70;
        let leftOnEarth = (lifeExpect - age);
        return (Math.floor(leftOnEarth /1.88));



      } else if (sex === "male" && continent === "North America" || "Europe" && planet === "Jupiter") {
        let lifeExpect = 77;
        let leftOnEarth = (lifeExpect - age);
        return (Math.floor(leftOnEarth /11.86 ));
      } else if (sex === "female" && continent == "North America" || "Europe" && planet ==="Jupiter") {
          let lifeExpect = 81;
          let leftOnEarth = (lifeExpect - age);
          return (Math.floor(leftOnEarth /11.86 ));

      } else if (sex === "male" && continent == "Oceania" || "Latin America" && planet ==="Jupiter") {
          let lifeExpect = 73;
          let leftOnEarth = (lifeExpect - age);
          return (Math.floor(leftOnEarth /11.86 ));
      } else if (sex === "female" && continent == "Oceania" || "Latin America" && planet ==="Jupiter") {
          let lifeExpect = 79;
          let leftOnEarth = (lifeExpect - age);
          return (Math.floor(leftOnEarth /11.86 ));

      } else if (sex === "male" && continent == "Asia" || "Africa" && planet ==="Jupiter") {
          let lifeExpect = 65;
          let leftOnEarth = (lifeExpect - age);
          return (Math.floor(leftOnEarth /11.86 ));
      } else if (sex === "female" && continent == "Asia" || "Africa" && planet ==="Jupiter") {
          let lifeExpect = 70;
          let leftOnEarth = (lifeExpect - age);
          return (Math.floor(leftOnEarth /11.86 ));



      }


}




}
