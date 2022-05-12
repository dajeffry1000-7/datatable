import { Datatable } from "./datatable.js"
const $table = document.querySelector(".table")

const columnsTeams = [
  {
    prop: "numberTeam",
    name: "Номер бригады",
    width: '100px',
  },
  {
    prop: "city",
    name: "Населенный пункт",
  },
  {
    prop: "compound",
    name: "Состав",
  },
  {
    prop: "component",
    name: "График",
  },
]

const rowTeams = [
  {
    compound: "Кабанов А. В.",
    numberTeam: "<div style=''>#1</div>",
    city: "Севастополь",
    component: "",
    id: 1,
    kdf: "df",
  },
  {
    compound: "Жужанов А. В.",
    numberTeam: "#2",
    city: "Севастополь",
    component: "test",
    id: 2,
  },
  {
    compound: "Сыктывкаров А. В.",
    numberTeam: "#3",
    city: "Симферополь",
    component: "test",
    id: 3,
  },
  {
    compound: "Сыктывкаров А. В.",
    numberTeam: "#4",
    city: "Симферополь",
    component: "test",
    id: 4,
  },
  {
    compound: "Сыктывкаров А. В.",
    numberTeam: "#5",
    city: "Симферополь",
    component: "test",
    id: 5,
  },
  {
    compound: "Сыктывкаров А. В.",
    numberTeam: "#6",
    city: "Симферополь",
    component: "test",
    id: 6,
  },
]

const datatable = new Datatable(columnsTeams, rowTeams)
datatable.mount($table)
