/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('activities').del()
  await knex('activities').insert([
    {
      id: 1,
      name: 'Lagoon Cruise',
      activitiesType_id: 1,
    },
    {
      id: 2,
      name: 'Needle Walk',
      activitiesType_id: 2,
    },
    {
      id: 3,
      name: 'Akirata Dance Troupe Island Night at the Islander Hotel',
      activitiesType_id: 3,
    },
  ])
}
