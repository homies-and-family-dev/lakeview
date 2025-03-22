"use server"

import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import { JWT } from 'google-auth-library';

const CREDENTIALS = {
  client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
  private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY
    ? process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    : '',
};

const NEXT_PUBLIC_SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID;

export async function POST(req: NextRequest) {
  if (!CREDENTIALS.private_key || !CREDENTIALS.client_email || !NEXT_PUBLIC_SPREADSHEET_ID) {
    console.error('Faltan variables de entorno:', {
      hasPrivateKey: !!CREDENTIALS.private_key,
      hasClientEmail: !!CREDENTIALS.client_email,
      hasSpreadsheetId: !!NEXT_PUBLIC_SPREADSHEET_ID
    });
    return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 });
  }

  try {
    const auth = new JWT({
      email: CREDENTIALS.client_email,
      key: CREDENTIALS.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const { nombre, email, phone, horarioContacto, aceptaTerminos } = await req.json();
    
    const values = [[
      new Date().toISOString(),
      nombre,
      email,
      phone,
      horarioContacto,
      aceptaTerminos ? 'Sí' : 'No'
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId: NEXT_PUBLIC_SPREADSHEET_ID,
      range: 'Sheet1!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    return NextResponse.json({ message: 'Datos guardados correctamente' }, { status: 200 });
  } catch (error) {
    console.error('Error detallado:', error);
    return NextResponse.json({ 
      error: 'Error al guardar los datos',
      details: process.env.NODE_ENV === 'development' ? error : undefined
    }, { status: 500 });
  }
}
