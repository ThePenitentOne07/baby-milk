import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';
import BlogCard from './BlogCard';

export default function BlogCardHome({ title, description, image,  actionLink }) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      
        
        <BlogCard component="img"
          height="140"
          image={image}
          alt={title}/>

    </Card>
  );
}

// Usage example



