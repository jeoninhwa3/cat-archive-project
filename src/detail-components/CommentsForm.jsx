import React from 'react';

const CommentsForm = () => {
  // 댓글생성(C) 댓글테이블에 추가
  async function CreateComments() {
    e.preventDefault();
    setInputComments(e.target.value);

    //유저 이름이랑 프로필 이미지 찾기
    const userName = users.find((user) => user.id === session.user.id);
    const usersImg = users.find((user) => user.id === session.user.id);

    // created_at 문자열을 Date 객체로 변환
    const createdAtDate = new Date(createdAtString);

    // 년, 월, 일 추출
    const year = createdAtDate.getFullYear(); // 년도
    const month = createdAtDate.getMonth() + 1; // 월 (0부터 시작하므로 +1)
    const day = createdAtDate.getDate(); // 일

    // 년월일 형식으로 조합
    const formattedDate = `${year}-${month}-${day}`;

    const { nextComments } = await supabase
      .from('posts')
      .insert({
        id: uuidv4(),
        content: inputComments,
        post_id: paramsId,
        user_id: session.user.id,
        name: userName.name,
        img: usersImg.url
      })
      .select('*');

    setComments((prev) => [...prev, ...nextComments]); //테이블에 추가되면 어차피 가지고올때 가져오는거니까 꼭 추가 안해도되는건지 헷갈림
    setInputComments('');
  }
  return (
    <>
      <h2>댓글영역</h2>
      <form onSubmit={CreateComments}>
        <input type="text" value={inputComments} onChange={(e) => setComments(e.target.value)} />
        <button type="submit">댓글등록</button>
      </form>
    </>
  );
};

export default CommentsForm;
