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
			<strong>공지사항</strong>
			<p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
		</div>
		<div class="board_list_wrap">
			<div class="board_list">
				<div class="top">
					<div class="num">번호</div>
					<div class="title">제목</div>
					<div class="writer">글쓴이</div>
					<div class="date">작성일</div>
					<div class="count">조회</div>
				</div>
				<div>
					<div class="num">5</div>
					<div class="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
					<div class="writer">김이름</div>
					<div class="date">2021.1.15</div>
					<div class="count">33</div>
				</div>
				<div>
					<div class="num">4</div>
					<div class="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
					<div class="writer">김이름</div>
					<div class="date">2021.1.15</div>
					<div class="count">33</div>
				</div>
				<div>
					<div class="num">3</div>
					<div class="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
					<div class="writer">김이름</div>
					<div class="date">2021.1.15</div>
					<div class="count">33</div>
				</div>
				<div>
					<div class="num">2</div>
					<div class="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
					<div class="writer">김이름</div>
					<div class="date">2021.1.15</div>
					<div class="count">33</div>
				</div>
				<div>
					<div class="num">1</div>
					<div class="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
					<div class="writer">김이름</div>
					<div class="date">2021.1.15</div>
					<div class="count">33</div>
				</div>
			</div>
			<div class="board_page">
				<a href="#" class="bt first"></a>
				<a href="#" class="bt prev"></a>
				<a href="#" class="num on">1</a>
				<a href="#" class="num">2</a>
				<a href="#" class="num">3</a>
				<a href="#" class="num">4</a>
				<a href="#" class="num">5</a>
				<a href="#" class="bt next">></a>
				<a href="#" class="bt last">>></a>
			</div>
			<div class="bt_wrap">
				<a href="write.html" class="on">등록</a>
				<!--<a href="#">수정</a>-->
			</div>
		</div>
	</div>
</template>

<!-- <script lang="ts">
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
</script> -->

<!-- <script lang="js">
var div = document.getElementById("mainWrapper");
console.log(div);
</script> -->

<style>
/* .example {
	color: red;
}

.container {
	width: 80%;
} */

body {
	line-height: 2em;
	font-family: "맑은 고딕";
}

h1 {
	font-size: 50px;
}

ul,
li {
	list-style: none;
	text-align: center;
	padding: 0;
	margin: 0;
}

#mainWrapper {
	width: 1200px;
	margin: 0 auto; /*가운데 정렬*/
}

#mainWrapper > ul > li:first-child {
	text-align: center;
	font-size: 14pt;
	height: 40px;
	vertical-align: middle;
	line-height: 30px;
}

#ulTable {
	margin-top: 10px;
}

#ulTable > li:first-child > ul > li {
	background-color: #c9c9c9;
	font-weight: bold;
	text-align: center;
}

#ulTable > li > ul {
	clear: both;
	padding: 0px auto;
	position: relative;
	min-width: 40px;
}
#ulTable > li > ul > li {
	float: left;
	font-size: 10pt;
	border-bottom: 1px solid silver;
	vertical-align: baseline;
}

#ulTable > li > ul > li:first-child {
	width: 10%;
} /* No */
#ulTable > li > ul > li:first-child + li {
	width: 20%;
} /* Title*/
#ulTable > li > ul > li:first-child + li + li {
	width: 30%;
} /* Article*/
#ulTable > li > ul > li:first-child + li + li + li {
	width: 20%;
} /* Tag */
#ulTable > li > ul > li:first-child + li + li + li + li {
	width: 10%;
} /* Created Date */
#ulTable > li > ul > li:first-child + li + li + li + li + li {
	width: 10%;
} /* Modified Date */

#divPaging {
	clear: both;
	margin: 0 auto;
	width: 220px;
	height: 50px;
}

#divPaging > div {
	float: left;
	width: 30px;
	margin: 0 auto;
	text-align: center;
}

#liSearchOption {
	clear: both;
}
#liSearchOption > div {
	margin: 0 auto;
	margin-top: 30px;
	width: auto;
	height: 100px;
}

.left {
	text-align: left;
}
</style>
