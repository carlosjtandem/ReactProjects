# React + TypeScript + Vite
To run npm run dev

Project based on: https://www.sitepoint.com/create-sortable-filterable-table-react/

To crete a Json example:
https://json-generator.com/


eg.
[
  '{{repeat(10)}}',
  {
    id: '{{index()}}',
    name: '{{firstName()}} {{surname()}}',
    company: '{{company().toUpperCase()}}',
    active: '{{bool()}}',
    country: '{{country()}}'
  }
]