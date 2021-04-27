<template>
<div class="container">
      <div class="table-responsive py-4">
    <table aria-describedby="table" class="table" :id="id">
      <thead class="bg-default text-white" style="background-color: black">
        <tr>
          <th v-for="(column, index) in columns" scope="row" :key="index">
            {{ column.title }}
          
          </th>
          <th scope="row" v-if="actions.length > 0" >Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="(column, index) in columns" :key="index">
            {{ row[column.reggs] }}
          </td>
          <td v-if="actions.length > 0">
            <button v-for="(action, index) in actions" :key="index" :class="action.btnClass" @click="action.btnFn(row[action.btnParamName])"><em :class="action.iconClass"></em> {{action.btnText}}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</template>
<script>

import $ from "jquery";

/* var $ = require( "jquery" ); */

export default {
  props: ["options", "id", "actions", "data", "columns"],
  methods: {
    // performAction: function(action_name,param){
    //     this.actions[action_name](param)
    // }
  },
  mounted() {
    $(`#${this.id}`).DataTable({
      ...this.options,
      language: {
        paginate: {
          previous: "<em class='fas fa-chevron-left'></em>",
          next: "<em class='fas fa-chevron-right'></em>",
        },
      },
    });
  },
};
</script>
<style scoped>

</style>