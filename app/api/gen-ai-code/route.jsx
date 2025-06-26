import { NextResponse } from "next/server";
import { GenAiCode } from '@/configs/AiModel';

export async function POST(req){
    const {prompt, environment = 'React'}=await req.json();
    try{
        const result=await GenAiCode.sendMessage(prompt);
        let resp=result.response.text();
        
        // Extract JSON from markdown code blocks if present
        const jsonMatch = resp.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
            resp = jsonMatch[1];
        }
        
        // Parse the response
        let parsedResponse;
        try {
            parsedResponse = JSON.parse(resp);
        } catch (parseError) {
            // If parsing fails, return a default structure with empty files
            console.error('Failed to parse AI response:', parseError);
            parsedResponse = {
                files: {},
                error: 'Failed to parse AI response'
            };
        }
        
        // Ensure files property exists, even if empty
        if (!parsedResponse.files) {
            parsedResponse.files = {};
        }
        
        return NextResponse.json(parsedResponse);
    }catch(e){
        // Return error with empty files to satisfy Convex validation
        return NextResponse.json({
            files: {},
            error: e.message
        });
    }
}