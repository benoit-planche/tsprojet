import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class DatabaseHealthController {
  async handle({ response }: HttpContext) {
    try {
      await db.rawQuery('SELECT 1')
      return response.ok({ message: 'Database is accessible' })
    } catch (error) {
      return response.serviceUnavailable({ message: 'Database is not accessible', error })
    }
  }
}
