import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Job from '@/app/api/models/JobModel';

export async function GET() {
    try {
        await connectToDatabase();
        const jobs = await Job.find();
        return NextResponse.json(jobs);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const jobData = await req.json();

        // Validate required fields
        if (!jobData.company || !jobData.job_title || !jobData.job_type || !jobData.job_work_type || !jobData.job_location) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newJob = new Job(jobData);
        await newJob.save();
        return NextResponse.json(newJob);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
    }
}