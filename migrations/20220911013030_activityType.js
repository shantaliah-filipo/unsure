/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('activityType', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('type')
    table.string('price')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // return knex.schema.dropTable('activityType')
}
