'use strict'

const dotenv = require('dotenv')
const assert = require('assert')

dotenv.config()

const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} = process.env

assert(PORT, 'PORT is required')
assert(HOST, 'HOST is required')

module.exports = {
  port: PORT,
  host: HOST,
  url:  HOST_URL,
  firebaseConfig: {
    apiKey: "AIzaSyDG_SHZ15DHlMguJThOqw88RD98wXeeNPY",
    authDomain: "profile-a4697.firebaseapp.com",
    projectId: "profile-a4697",
    storageBucket: "profile-a4697.appspot.com",
    messagingSenderId: "146058574535",
    appId: "1:146058574535:web:0f3073d89b03ea5f059ce2",
    measurementId: "G-1SKZ5G9XV7"
  }
}