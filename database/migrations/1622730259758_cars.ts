import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cars extends BaseSchema {
  protected tableName = 'cars'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('plate').unique().notNullable
      table.string('brand')
      table.string('model')
      table.integer('price')
      table.integer('ppd')
      table.string('status')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
