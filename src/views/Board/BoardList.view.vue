<template>
	<!-- <div class="example">{{ msg }}</div> -->
	<!-- <h1>{{ posts }}</h1> -->
	<!-- <div class="board-main">
		<html>
			<head>
				<title>sample</title>
			</head>
			<body>
				<div class="container">
					<table>
						<tr>
							<th>Index</th>
							<th>User Name</th>
							<th>Title</th>
							<th>Tags</th>
						</tr>
						<tr>
							<td>#1</td>
							<td>Ray</td>
							<td>Test Article Title</td>
							<td>@sample</td>
						</tr>
					</table>
				</div>
			</body>
		</html>
	</div> -->

	<!-- <div class="container" v-for="post in posts" :key="post.id">
		<h1 class="post_id">{{ post.id }}</h1>
		<h2 class="post_title">{{ post.boardTitle }}</h2>
		<p class="post_article">{{ post.boardArticle }}</p>
		<p class="post_tag">{{ post.boardTag }}</p>
		<p class="post_cdate">{{ post.createdDate }}</p>
		<p class="post_mdate">{{ post.modDate }}</p>
		<hr />
	</div> -->
	<!-- <body>
		<div id="mainWrapper">
			<ul>
				게시판 제목
				<h1>Demo Application</h1>

				게시판 목록
				<li>
					Dash Board
					<ul id="ulTable">
						<li>
							<ul>
								<li>No.</li>
								<li>Title</li>
								<li>Article</li>
								<li>Tag</li>
								<li>C_Date</li>
								<li>M_Date</li>
							</ul>
						</li>

						<li v-for="post in posts" :key="post.id">
							<ul>
								<li>{{ post.id }}</li>
								<li>{{ post.boardTitle }}</li>
								<li>{{ post.boardArticle }}</li>
								<li>{{ post.boardTag }}</li>
								<li>{{ post.createdDate }}</li>
								<li>{{ post.modDate ? post.modDate : "-" }}</li>
							</ul>
						</li>

						Pagenation
						<div id="divPaging">
							<div>◀</div>
							<div><b>1</b></div>
							<div>2</div>
							<div>3</div>
							<div>4</div>
							<div>5</div>
							<div>▶</div>
						</div>

						Searcj form area
						<li id="liSearchOption">
							<div>
								<select id="selSearchOption">
									<option value="A">제목+내용</option>
									<option value="T">제목</option>
									<option value="C">내용</option>
								</select>
								<input id="txtKeyWord" />
								<input type="button" value="검색" />
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</body> -->

	<div class="board_wrap">
		<div class="board_title">
			<strong>OSC Korea</strong>
			<p>Posted Board List</p>
		</div>
		<div class="board_list_wrap">
			<div class="board_list">
				<div class="top">
					<div class="num">No.</div>
					<div class="title">Title</div>
					<div class="writer">Writer</div>
					<div class="date">Created Date</div>
					<div class="count">Modified Date</div>
				</div>
				<div v-for="post in posts" :key="post.id">
					<div class="num">{{ post.id }}</div>
					<div class="title">
						<router-link :to="{ path: './board_edit', params: { id: 3 } }">{{
							post.boardTitle
						}}</router-link>
						<!-- <a href="#">{{ post.boardTitle }}</a> -->
					</div>
					<div class="writer">{{ post.boardTag }}</div>
					<div class="date">{{ post.createdDate }}</div>
					<div class="date">{{ post.modDate ? post.modDate : "-" }}</div>
				</div>
			</div>
			<div class="board_page">
				<a href="#" class="bt first">◀◀</a>
				<a href="#" class="bt prev">◀</a>
				<a href="#" class="num on">1</a>
				<a href="#" class="num">2</a>
				<a href="#" class="num">3</a>
				<a href="#" class="num">4</a>
				<a href="#" class="num">5</a>
				<a href="#" class="bt next">▶</a>
				<a href="#" class="bt last">▶▶</a>
			</div>
			<div class="bt_wrap">
				<router-link
					class="on"
					:to="{ path: './board_edit', params: { id: 3 } }"
					>Enroll</router-link
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import axios from "axios";

export default {
	data() {
		return {
			posts: [
				{
					id: Number,
					boardTitle: String,
					boardArticle: String,
					boardTag: String,
					createdDate: Date,
					modDate: Date,
				},
			],
		};
	},
	mounted() {
		axios.get("http://localhost:8000/board/search").then(res => {
			this.posts = res.data;
		});
	},
};
</script>

<style>
@import url("../../styles/css.css");
@import url("../../styles/boardList.css");
@import url("../../styles/boardPage.css");
</style>
