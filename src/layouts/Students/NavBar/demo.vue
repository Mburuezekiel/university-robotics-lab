<template>
  <div>
    <apexchart type="bar" :options="chartOptions" :series="chartSeries" />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      equipmentData: [
        {
          "_id": "655ca85cb7eb6303807123c8",
          "equipment_type": "Universal Robots UR10 3 TF103",
          "equipment_room": "TF103",
          "equipment_location": "Cabinet",
          "equipment_category": "Robots and peripherals",
          "total_quantity": 3,
          "current_quantity": 2,
          "__v": 0
        },
        {
          "_id": "655dca684d538fb6a6c51dde",
          "equipment_type": "Robotiq FT-85",
          "equipment_room": "TF105",
          "equipment_location": "Shelf",
          "equipment_category": "Grippers",
          "total_quantity": 4,
          "current_quantity": 3,
          "__v": 0
        },
        {
          "_id": "655dd529b45f9bc44575d47f",
          "equipment_type": "Push buttons, lever and rocker switches",
          "equipment_room": "TF105",
          "equipment_location": "Cabinet",
          "equipment_category": "Buttons, relays, LEDs, etc.",
          "total_quantity": 45,
          "current_quantity": 45,
          "__v": 0
        }
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: this.equipmentData.map(item => item.equipment_type),
        },
        yaxis: {
          title: {
            text: 'Quantity',
          },
        },
        fill: {
          opacity: 1,
        },
      },
      chartSeries: [{
        name: 'Total Quantity',
        data: this.equipmentData.map(item => item.total_quantity),
      }, {
        name: 'Current Quantity',
        data: this.equipmentData.map(item => item.current_quantity),
      }],
      
    };
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
