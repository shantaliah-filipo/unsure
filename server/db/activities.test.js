const knex = require('knex')
const config = require('./knexfile')
const testCon = knex(config.test)

const { getActivityType } = require('./activities')

beforeAll(() => {
  return testCon.migrate.latest()
})

beforeEach(() => {
  return testCon.seed.run()
})

describe('getActivityType', () => {
  it('returns an activitytype from the database', () => {
    return getActivityType(testCon).then((res) => {
      expect(res).toHaveLength(5)
    })
  })
})
