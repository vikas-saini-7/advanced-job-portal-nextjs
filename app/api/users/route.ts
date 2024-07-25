// app/api/users/route.js
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import User from '@/app/api/models/UserModel';

export async function GET() {
    await connectToDatabase();
      const users = await User.find();
      return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
    await connectToDatabase();
    const { name, email } = await req.json();
    const newUser = new User({ name, email });
    await newUser.save();
    return NextResponse.json(newUser);
  }