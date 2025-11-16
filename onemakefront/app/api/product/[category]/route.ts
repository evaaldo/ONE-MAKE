import { NextResponse } from "next/server";
import { Params } from "./types";

export async function GET(request: Request, { params }: Params) {
  try {
    const resolvedParams = await params;
    const response = await fetch(
      `http://localhost:5078/api/product/${resolvedParams.category}`
    );
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: response.status,
          message: `Backend error: ${response.statusText}`,
        },
        {
          status: response.status,
        }
      );
    }

    if (data.error) {
      NextResponse.json(
        {
          error: 500,
          message: `Error on fetching data: ${data.error}`,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error : String(error);
    return NextResponse.json(
      {
        error: 500,
        message: `Error on fetching data: ${message}`,
      },
      {
        status: 500,
      }
    );
  }
}
