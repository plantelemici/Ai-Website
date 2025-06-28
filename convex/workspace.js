import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const CreateWorkspace = mutation({
    args:{
        messages:v.any(),
        environment:v.string(),
    },
    handler:async(ctx,args)=>{
        const workspaceId = await ctx.db.insert('workspace',{
            messages:args.messages,
            environment:args.environment
        });
        return workspaceId;
    }
})

export const GetWorkspace = query({ 
    args:{
        workspaceId:v.id('workspace')
    },
    handler:async(ctx,args)=>{
        const result = await ctx.db.get(args.workspaceId);
        return result;
    }
})

export const UpdateWorkspace = mutation({
    args:{
        workspaceId:v.id('workspace'),
        messages:v.any(),
    },
    handler:async(ctx,args)=>{
        const result=await ctx.db.patch(args.workspaceId,{
            messages:args.messages
        });
        return result;
    }
})

export const UpdateFiles = mutation({
    args:{
        workspaceId:v.id('workspace'),
        files:v.optional(v.any()),
    },
    handler:async(ctx,args)=>{
        const result=await ctx.db.patch(args.workspaceId,{
            fileData:args.files
        });
        return result;
    }
})