<template>
	<!-- <div class="board-write">
		<hr />
		<main>
			<form class="write-article" method="POST" @submit.prevent="createPost">
				<label for="ftitle">Title</label><br />
				<input
					type="text"
					id="postTitle"
					placeholder="Input Title Here"
					v-model="postData.boardTitle"
					required
				/>
				<hr style="width: 80%" />
				<label for="farticle">Article</label><br />
				<textarea
					cols="40"
					rows="10"
					id="article"
					placeholder="Input Article Here"
					v-model="postData.boardArticle"
				></textarea>
				<br />
				<label for="ftags">Tags</label><br />
				<input
					type="text"
					id="tag"
					placeholder="Input Tags Here"
					v-model="postData.boardTag"
				/>
				<br />
				<input type="submit" value="Submit" />
				<input type="reset" value="Cancel" />
			</form>
		</main>
	</div> -->
	<div class="board_write">
		<div class="board_title">
			<strong>공지사항</strong>
			<p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
		</div>
		<div class="board_write_wrap">
			<div class="board_write">
				<div class="title">
					<dl>
						<dt>제목</dt>
						<dd><input type="text" placeholder="제목 입력" /></dd>
					</dl>
				</div>
				<div class="info">
					<dl>
						<dt>글쓴이</dt>
						<dd><input type="text" placeholder="글쓴이 입력" /></dd>
					</dl>
					<dl>
						<dt>비밀번호</dt>
						<dd><input type="password" placeholder="비밀번호 입력" /></dd>
					</dl>
				</div>
				<div class="cont">
					<textarea placeholder="내용 입력"></textarea>
				</div>
			</div>
			<div class="bt_wrap">
				<a href="view.html" class="on">등록</a>
				<a href="list.html">취소</a>
			</div>
		</div>
	</div>
</template>

<!-- <script lang="ts">
import axios from "axios";

export default {
	data() {
		return {
			postData: {
				boardTitle: "",
				boardArticle: "",
				boardTag: "",
			},
		};
	},
	methods: {
		createPost() {
			axios
				.post("http://localhost:8000/board/post", this.postData)
				.then(res => console.log(res));
		},
	},
};
</script> -->
<script lang="ts">
export default {};
</script>
<style>
* {
	font-size: 16px;
	font-family: D2Coding;
}

hr {
	margin-top: 5px;
	margin-bottom: 5px;
}

label {
	position: relative;

	text-align: left;
}

#title {
	width: 70%;
	height: 30px;

	padding: 10px;

	margin-top: 10px;
	margin-bottom: 10px;
}

#article {
	resize: none;

	width: 70%;
	height: 300px;

	padding: 10px;

	margin-top: 10px;
	margin-bottom: 10px;
}

#tags {
	width: 70%;
	height: 25px;

	padding: 10px;

	margin-top: 10px;
	margin-bottom: 10px;
}
</style>
