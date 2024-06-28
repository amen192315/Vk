import React, { FC } from 'react'
import { IPost } from '../../../types'
import { Avatar, Box, ImageList, ImageListItem } from '@mui/material'
import { Link } from 'react-router-dom'


interface IPosts {
    posts:IPost[]
}

const Posts:FC<IPosts> = ({posts}) => {
  return (
    <>
    {posts.map((post, idx) => ( 
    <Box sx={{
        border:'1px solid #ccc',
        borderRadius:'10px',
        marginTop:4,
        padding:3
    }} key={`Post ${idx}`}>          
        <Link key={post.author._id} to={`/profile/${post.author._id}`} style={{display:'flex', alignItems:'center', textDecoration:'none',color:'#111', marginBottom:4}}>
            <Box sx={{position:'relative', marginRight:3, overflow:'hidden', width : 50, height : 50}}>
                <Avatar src={post.author.avatar} alt="" sx={ {width:48, height:48,borderRadius:'50%'}}/>    
            </Box>
                <div>
                   <div style={{fontSize:14}}>{post.author.name}</div>
                   <div style={{fontSize:14, opacity:'0.6'}}>{post.createdAt}</div>
                </div>
        </Link>
        <p>
            {post.content}
        </p>
        {post?.images?.length && <ImageList variant='masonry' cols={3} gap={8}>
                {post.images.map(img => (
                    <ImageListItem key={img}>
                        <img src={img} alt="" loading='lazy'/>
                    </ImageListItem>
                ))}
            </ImageList>}
    </Box>
        ))}
        </>
  )
}

export default Posts
