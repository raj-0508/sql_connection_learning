import {  NextResponse } from 'next/server'
import mysql from 'mysql2/promise'

export async function GET() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })

  const [rows] = await connection.execute('SELECT * FROM items LIMIT 20')
  await connection.end()

  return NextResponse.json(rows)
}
