import * as d3 from "d3";

const url = "https://udemy-react-d3.firebaseio.com/ages.json";
//const url = './ages.json';

export default class D3Chart {
  constructor(el) {
    const svg = d3
      .select(el)
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    d3.json(url).then(agesData =>{
        const rects = svg.selectAll("rect").data(agesData);

    rects
      .enter()
      .append("rect")
      .attr("width", 50)
      .attr("height", (item) => item.age * 10)
      .attr("x", (item, index) => index * 100)
      .attr("y", 20)
      .attr("fill", d => {
        if(d.age > 10)
            return "green"
        else if(d.age > 6 && d.age <= 9)
            return "yellow"
        else
            return "red"
      });
    })

    
    /*data.forEach((item, index)=>{
            svg.append("rect")
            .attr("width", 50)
            .attr("height", item)
            .attr("x", index * 100)
            .attr("y", 20)
            .attr("fill", 'gray')
        })*/
  }
}
