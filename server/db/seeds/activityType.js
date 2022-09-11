/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('activityType').del()
  await knex('activityType').insert([
    { id: 1, type: 'Water-based' },
    { id: 2, type: 'Land-based' },
    { id: 3, type: 'Cultural' },
  ])
}
