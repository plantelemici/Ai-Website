import { chatSession } from "@/configs/AiModel";
import Prompt from "@/data/Prompt";
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { prompt, environment = 'React' } = await request.json();
        
        const environmentContext = `
        Selected Development Environment: ${environment}
        
        ${environment === 'React' ? 'Focus on React components, hooks, and modern JavaScript patterns.' : 
          environment === 'WordPress' ? 'Focus on WordPress theme development, PHP, and WordPress-specific features.' :
          'Focus on semantic HTML, modern CSS, and vanilla JavaScript.'}
        `;
        
        const result = await chatSession.sendMessage([
            Prompt.ENHANCE_PROMPT_RULES,
            environmentContext,
            `Original prompt: ${prompt}`
        ]);
        
        const text = result.response.text();
        
        return NextResponse.json({
            enhancedPrompt: text.trim()
        });
    } catch (error) {
        return NextResponse.json({ 
            error: error.message,
            success: false 
        }, { status: 500 });
    }
}