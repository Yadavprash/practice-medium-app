import { PrismaClient, User } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@yadavprash/medium-common";
import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'


export const blogRouter = new Hono<{
    Bindings : {
      DATABASE_URL : string;
      JWT_SECRET: string;
    },
    Variables:{
        userId: any;
    }
  }>();

  blogRouter.use("/*",async (c,next)=>{
    const token = c.req.header("Authorization") || "";

    try {
        const user = await verify(token,c.env.JWT_SECRET);
        if(user){
            c.set('userId',user.id);
            await next();
        }else{
            c.status(403);
            return c.json({
                msg: "You are not Logged in"
            })
        }
    } catch (error) {
        return c.json({
            msg:"Not logged in"
        })
    }
  });


blogRouter.post('/', async (c) =>{
    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
    if(!success){
        c.status(403);
        return c.json({
            msg:"Incorrect Inputs"
        })
    }
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.blog.create({
        data:{
            title: body.title,
            content : body.content,
            authorId : Number(authorId)
        }
    })

    return c.json({
        id: blog.id,
        msg:"Blog created"
    });
  })
  
  blogRouter.put('/:id', async (c) =>{
    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
    if(!success){
        c.status(403);
        return c.json({
            msg:"Incorrect Inputs"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.blog.update({
        where:{
            id : Number(c.req.param('id'))
        },
        data:{
            title: body.title,
            content : body.content,
        }
    })

    return c.json({
        id: blog.id,
        msg: "Blog created!"
    });
  })
  
 //Todo add pagination
 blogRouter.get('/bulk', async(c) =>{
    console.log("hi");
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const blogs = await prisma.blog.findMany({});
    
        return c.json({
            blogs
        });
    }catch(e){
        // console.log(e);
        c.status(411);
        return c.text("Error loading")
    }
  })
  


  blogRouter.get('/:id', async(c) =>{
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const blog = await prisma.blog.findFirst({
            where:{
                id : Number(c.req.param('id'))
            }
        })
    
        return c.json({
            blog            
        });
    }catch(e){
        console.log(e);
        c.status(411);
        return c.text("Cannot find")
    }

  })
  

 