const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Post } = require('./models');

mongoose.connect('mongodb+srv://htty94:비밀번호@cluster0.eierr6l.mongodb.net/test')
   .then((res) => {
    console.log('mongodb connected')
   })

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hi");
});

//post 라는 url을 가져왔을때 전체 글 목록 가져오기
app.get('/posts', async(req, res) => {
    const allPosts = await Post.find({});
    res.send(allPosts);
})

//x번 게시물을 보여줘! 상세목록
app.get('/posts/:id', async(req,res) => {
    const id = req.params.id;
    const postById = await Post.findOne({ id });
    res.send(postById);
})

//게시글 작성
app.post('/post' , async(req, res) => {
   const {id, title, content, author} = req.body;
   const newPost = await Post.create ({
     id,
     title,
     content,
     author,
   })
   res.send(newPost);
})

//게시글 수정
app.put('/posts', async(req, res ) => {
    const { id } = req.params;
    const { title, content} = req.body;
    
    const updatedPost = await Post.findoneAndUpdate({id}, { title, content});
    res.send(updatedPost);
})

//삭제
app.delete('/posts/:id', async (req,res) => {
    const id = req.params.id;
    await Post.findoneAndDelete({ id });
    res.send('삭제되었습니다.');
})

app.listen(8008);

