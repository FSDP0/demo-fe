<template>
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
							<input
								type="text"
								id="postWriter"
								placeholder="Input Author"
								v-model="postData.boardWriter"
							/>
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
				<!-- <a href="view.html" class="on">Post</a> -->
				<button
					class="on"
					v-on:click="createPost"
					@click="$router.push('../board_list')"
				>
					Post
				</button>
				<router-link to="../board_list">Cancel</router-link>
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
				boardWriter: "",
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
@import url("../../styles/defaultCss.css");
@import url("../../styles/boardWrite.css");
</style>
