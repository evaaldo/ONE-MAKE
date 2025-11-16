import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("http://localhost:5078/api/product");
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
      return NextResponse.json(
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
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        error: 500,
        message: `Error on fetching data: ${message}`,
      },
      { status: 500 }
    );
  }
}
