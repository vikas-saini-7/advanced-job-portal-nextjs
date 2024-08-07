import Application, { IApplication } from "../models/ApplicationModel";
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';

// Get all applications
export async function GET() {
    try {
        await connectToDatabase();
        const applications = await Application.find();
        return NextResponse.json(applications);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
    }
}

// Create a new application
export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const applicationData = await req.json();

        if (!applicationData || !applicationData.job || !applicationData.resume || !applicationData.recent_role || !applicationData.recent_company) {
            return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
        }

        const application = new Application({
            job: applicationData.job,
            resume: applicationData.resume,
            recent_role: applicationData.recent_role,
            recent_company: applicationData.recent_company,
        });

        await application.save();
        return NextResponse.json(application);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create application' }, { status: 500 });
    }
}