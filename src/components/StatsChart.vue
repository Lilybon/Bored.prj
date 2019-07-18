<template>
    <v-flex xs12 pa-2 mb-2>
        <div class="stats-chart__container">
            <svg :class="chartType" :width="width" :height="height" color="black"/>
        </div>
    </v-flex>
    
</template>

<script>
import * as d3 from 'd3'
import { mapState } from 'vuex'

export default {
    props: {
        chartType: String,
        data: Array,
    },
    data() {
        return {
            title: '',
            width: 0,
            height: 0
        }
    },
    mounted() {
        this.plot()
    },
    computed: {
        ...mapState(['categories'])
    },
    methods: {
        plot() {
            this.getChartContainerSize()
            switch(this.chartType){
                case 'stats-chart--group-bar-chart':
                    this.title = '活動類型的喜好程度'
                    this.groupBarChart(this.width, this.height)
                    break
                case 'stats-chart--scatter-plot':
                    this.title = '活動之開銷與難易度分布圖'
                    this.scatterPlot(this.width, this.height)
                    break
                default:
                    alert('Undefined chartType!', this.chartType)
            }
        },
        getChartContainerSize() {
            const container = document.querySelector(`.stats-chart__container`)
            this.width = container.clientWidth
            this.height = container.clientHeight
        },
        groupBarChart(width, height) {
            const margin = {top: 30, right: 20, bottom: 30, left: 50},
                  barPadding = .2,
                  axisTicks = {qty: 5, outerSize: 0, dateFormat: '%m-%d'}

            var svg = d3.select(`.${ this.chartType }`)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`)

            var xScale0 = d3.scaleBand()
                .range([0, width - margin.left - margin.right])
                .padding(barPadding)

            var xScale1 = d3.scaleBand()

            var yScale = d3.scaleLinear()
                .range([height - margin.top - margin.bottom, 0])

            var xAxis = d3.axisBottom(xScale0)
                .tickSizeOuter(axisTicks.outerSize)

            var yAxis = d3.axisLeft(yScale)
                .ticks(axisTicks.qty)
                .tickSizeOuter(axisTicks.outerSize)

            xScale0.domain(this.data.map(d => d.type))

            xScale1.domain(['likeCount', 'dislikeCount'])
                .range([0, xScale0.bandwidth()])

            yScale.domain([0, d3.max(this.data, d => d.likeCount > d.dislikeCount ? d.likeCount : d.dislikeCount)])

            var activityTypeGroup = svg.selectAll(".group-bar-chart__activity-type")
                .data(this.data)
                .enter().append("g")
                .attr("class", "group-bar-chart__activity-type")
                .attr("transform", d => `translate(${xScale0(d.type)},0)`)

            activityTypeGroup.selectAll(".group-bar-chart__bar--like-count")
                .data(d => [d])
                .enter()
                .append("rect")
                .attr("class", "group-bar-chart__bar--like-count")
                .attr("x", xScale1('likeCount'))
                .attr("y", d => yScale(d.likeCount))
                .attr("width", 0)
                .attr("height", 0)
                .transition().duration(800)
                .attr("width", xScale1.bandwidth())
                .attr("height", d => {
                    return height - margin.top - margin.bottom - yScale(d.likeCount)
                })
            
            activityTypeGroup.selectAll(".group-bar-chart__bar--dislike-count")
                .data(d => [d])
                .enter()
                .append("rect")
                .attr("class", "group-bar-chart__bar--dislike-count")
                .attr("x", xScale1('dislikeCount'))
                .attr("y", d => yScale(d.dislikeCount))
                .attr("width", 0)
                .attr("height", 0)
                .transition().duration(800)
                .attr("width", xScale1.bandwidth())
                .attr("height", d => {
                    return height - margin.top - margin.bottom - yScale(d.dislikeCount)
                })

            svg.append("g")
                .attr("class", "group-bar-chart__x-axis")
                .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
                .call(xAxis)

            svg.append("g")
                .attr("class", "group-bar-chart__y-axis")
                .call(yAxis)

            svg.append("text")
                .attr("x", width / 2 - margin.left)
                .attr("y", -margin.top)
                .attr("dy", "1.5em")
                .style("text-anchor", "middle")
                .text(this.title)

            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("x", - height / 2)
                .attr("y", - margin.left)
                .attr("dy", "1.5em")
                .style("text-anchor", "middle")
                .text("喜歡(討厭次數")
        },
        scatterPlot(width, height) {
            const padding = 50
            
            var svg = d3.select(`.${ this.chartType }`)

            var xScale = d3.scaleLinear()
                .domain(d3.extent(this.data, d => d.accessibility))
                .range([padding, width - padding])

            var yScale = d3.scaleLinear()
                .domain(d3.extent(this.data, d => d.price))
                .range([height - padding, padding])

            var rScale = d3.scaleLinear()
                .domain(d3.extent(this.data, d => d.participants))
                .range([5, 15])

            var fScale = d3.scaleOrdinal()
                .domain(this.categories.map(val => val.value))
                .range(d3.schemeSet3)

            var sScale = d3.scaleOrdinal()
                .domain([true, false])
                .range(['#0ab97f', '#d81503'])

            var xAxis = d3.axisBottom(xScale)
                .tickSize(- height + 2 * padding)
                .tickSizeOuter(0)

            var yAxis = d3.axisLeft(yScale)
                .tickSize(- width + 2 * padding)
                .tickSizeOuter(0)

            svg.append("g")
                .attr("transform", `translate(0, ${ height - padding })`)
                .call(xAxis)

            svg.append("g")
                .attr("transform", `translate(${ padding }, 0)`)
                .call(yAxis)

            svg.append("text")
                .attr("x", width / 2)
                .attr("y", 0)
                .attr("dy", "1.5em")
                .style("text-anchor", "middle")
                .text(this.title)

            svg.append("text")
                .attr("x", width / 2)
                .attr("y", height - padding / 2)
                .attr("dy", "1.5em")
                .style("text-anchor", "middle")
                .text("活動難易度")

            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("x", - height / 2)
                .attr("y", 0)
                .attr("dy", "1.5em")
                .style("text-anchor", "middle")
                .text("開銷")

            svg.selectAll("circle")
                .data(this.data)
                .enter()
                .append("circle")
                    .attr("cx", d => xScale(d.accessibility))
                    .attr("cy", d => yScale(d.price))
                    .attr("r", d => rScale(d.participants))
                    .attr("fill", "transparent")
                    .attr("stroke-width", 0)
                    .transition().duration(800)
                    .attr("fill", d => fScale(d.type))
                    .attr("stroke", d => sScale(d.likeFlag))
                    .transition().duration(400)
                    .attr("stroke-width", 3)
        }
    }
}
</script>

<style>
.stats-chart__container {
    overflow: hidden;
    background-color: #f5edd6;
    width: 240px;
    height: 208px;
    margin: auto;
}
@media (min-width: 520px) {
    .stats-chart__container {
        width: 520px;
        height: 450px;
    }
}
.group-bar-chart__bar--like-count {
    fill: #0ab97f;
}
.group-bar-chart__bar--dislike-count {
    fill: #d81503;
}
.tick line {
  stroke: #ccc;
  stroke-dasharray: 10, 5;
}
</style>


