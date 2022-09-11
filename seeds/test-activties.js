/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('activities').del()
  await knex('activities').insert([
    { id: 1, name: 'Lagoon Cruise', type: 'Water' },
    { id: 2, name: 'Needle Walk', type: 'Land' },
    {
      id: 3,
      name: 'Akirata Dance Troupe Island Night at the Islander Hotel',
      type: 'Cultural',
    },
  ])
}
