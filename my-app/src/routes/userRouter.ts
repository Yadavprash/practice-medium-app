import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signinInput, signupInput } from "@yadavprash/medium-common";



export const userRouter = new Hono<{
    Bindings:{
        JWT_SECRET : string;
        DATABASE_URL : string;
    }
}>();


userRouter.post('/signup', async(c) =>{
    const prisma = new PrismaClient({    //This type of prisma client cannot be accessed globally hence declared inside the route
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
  try{
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Inputs not correct"
      })
    }

      const user = await prisma.user.create({
        data:{
          username:body.username,
          password:body.password,
          name: body.name
        }
      })
      const jwt = await sign({
        id:user.id
      },c.env.JWT_SECRET);
      return c.json({
        token:jwt
      });
    } catch(e){
      c.status(403);
      return c.text("Error Signing up!")
    }
  })
  
  userRouter.post('/signin', async(c) =>{
    const prisma = new PrismaClient({    //This type of prisma client cannot be accessed globally hence declared inside the route
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try{
      const body = await c.req.json();
      const {success} = signinInput.safeParse(body);
      if(!success){
        c.status(411);
        return c.json({
          message: "Inputs not correct"
        })
      }
      const user = await prisma.user.findFirst({
        where:{
          username:body.username,
          password:body.password,
        }
      })
      if(!user){
        c.status(403);
        return c.text('Invalid Credentials');
      }
  
      const jwt = await sign({
        id:user.id
      },c.env.JWT_SECRET);
  
      return c.json({
        token:jwt
      });
    } catch(e){
      console.log(e);
      return c.status(403);
    }
  })