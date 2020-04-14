import * as D3Chart from 'd3';

const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";

const MARGIN = {TOP: 20, BOTTOM: 50, LEFT: 70, RIGHT: 20};

const SVG_HEIGHT = 420 - MARGIN.TOP - MARGIN.BOTTOM;
const SVG_WIDTH = 750 - MARGIN.LEFT - MARGIN.RIGHT;
 
export default class BarChart{
    constructor(el){
        const svg = D3Chart.select(el)
                        .append('svg')
                            .attr('width', SVG_WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
                            .attr('height', SVG_HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
                        .append('g')
                            .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)
        
        D3Chart.json(url).then(data=>{
            const rects = svg.selectAll("rect")
                                .data(data);

            const xAxisDomainRange = D3Chart.scaleBand()
                            .domain(data.map(d=>d.name))
                            .range([0, SVG_WIDTH])
                            .padding(0.5);

            const xAxisCall = D3Chart.axisBottom(xAxisDomainRange);
            svg.append("g")
                .attr('transform', `translate(0, ${SVG_HEIGHT})`)
                .call(xAxisCall)
                    .selectAll("text")  
                    .style("text-anchor", "end")
                    .attr("dx", "-.1em")
                    .attr("dy", ".15em")
                    .attr("transform", "rotate(-15)");
            
            const yAxisDomainRange = D3Chart.scaleLinear()
                            .domain([D3Chart.min(data, d=>d.height)*0.95 ,D3Chart.max(data, d => d.height)])
                            .range([SVG_HEIGHT, 0]);

            const yAxisCall = D3Chart.axisLeft(yAxisDomainRange);
            svg.append("g").call(yAxisCall);

            svg.append("text")
                .attr("y", SVG_HEIGHT + 50)
                .attr("x", SVG_WIDTH / 2)
                .attr("text-anchor","middle")
                .text("Tallest Man");

            svg.append("text")
                .attr("x",  -(SVG_HEIGHT / 2))
                .attr("y", -45)
                .attr("text-anchor","middle")
                .attr("transform", "rotate(-90)")
                .text("Height in cms");
            
            
            rects.enter().append("rect")
                    .attr("width", xAxisDomainRange.bandwidth)
                    .attr("height", (d=>SVG_HEIGHT - yAxisDomainRange(d.height)))
                    .attr("x",(d =>xAxisDomainRange(d.name)))
                    .attr("y", (d=> yAxisDomainRange(d.height)))
                    .attr("fill", 'gray')
        })
    }
}