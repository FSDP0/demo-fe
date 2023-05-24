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
	<div class="board_wrap">
		<div class="board_title">
			<strong>OSC Korea</strong>
			<p>Board</p>
		</div>
		<div class="board_write_wrap">
			<div class="board_write">
				<div class="title">
					<dl>
						<dt><h2>Title</h2></dt>
						<dd>
							<input
								type="text"
								id="postTitle"
								placeholder="Input Title Here"
								v-model="postData.boardTitle"
								required
							/>
						</dd>
					</dl>
				</div>
				<div class="info">
					<dl>
						<dt><h2>Tag</h2></dt>
						<dd>
							<input
								type="text"
								id="postTag"
								placeholder="Input Tag Here"
								v-model="postData.boardTag"
							/>
						</dd>
					</dl>
					<dl>
						<dt><h2>Writer</h2></dt>
						<dd>
							<input type="text" id="postWriter" placeholder="Input Author" />
						</dd>
					</dl>
				</div>
				<div class="cont">
					<textarea
						id="postArticle"
						placeholder="Input Content Here"
						v-model="postData.boardArticle"
					></textarea>
				</div>
			</div>
			<div class="bt_wrap">
				<a href="view.html" class="on">Post</a>
				<RouterLink to="./board_list">Cancel</RouterLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
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
</script>

<style>
@import url("../../styles/css.css");
@import url("../../styles/boardWrite.css");
</style>
