import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// Github OCTOKIT: https://github.com/octokit/octokit.js
const ENDPOINT_BASE = ':6789/events/winlogs'
const ENDPOINTS_IPv4 = [
  '172.16.111.129'
]
const CLIENTS = ENDPOINTS_IPv4.map(e => `http://${e}${ENDPOINT_BASE}`)

export async function GET(request: NextRequest) {
  try {
    // const data = await axios.get(CLIENTS[0])
    // return NextResponse.json(data.data, {status: 201})
    return NextResponse.json([
      {id: 1, name: 'foo'},
      {id: 2, name: 'bar'}
    ])
  } catch (error) {
    // return NextResponse.json({ errors: error }, { status: 503 })
  }
}