/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('activities', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('price')
    table.integer('activityType_id')
    // table.string('activityType_type')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // return knex.schema.dropTable('activities')
}
