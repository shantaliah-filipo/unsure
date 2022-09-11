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
      name: 'Snorkelling',
      price: 25,
      activityType_id: 1,
      // activityType: 'Water-based',
    },
    {
      id: 2,
      name: 'Raro Buggy Tours',
      price: 150,
      activityType_id: 2,
      // activityType: 'Land-based',
    },
    {
      id: 3,
      name: 'Raro Safari Tours',
      price: 0,
      activityType_id: 2,
      // activityType: 'Land-based',
    },
    {
      id: 4,
      name: 'Rehab Party Bus',
      price: 40,
      activityType_id: 4,
      // activityType: 'Nightlife',
    },

    {
      id: 5,
      name: 'Over Water Night Show & Buffet Dinner at Te Vara Nui Village',
      price: 100,
      activityType_id: 5,
      // activityType: 'Cuisine',
    },
    {
      id: 6,
      name: 'Atiu Punarea Culture Tours',
      price: 0,
      activityType_id: 5,
      // activityType: 'Cultural',
    },
  ])
}
