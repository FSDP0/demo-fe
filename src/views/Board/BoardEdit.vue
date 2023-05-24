<template>
	<div class="board_wrap">
		<div class="board_title">
			<strong>OSC Korea</strong>
			<p>Board Edit</p>
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
								v-bind:value="originData.boardTitle"
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
								v-bind:value="originData.boardTag"
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
								v-bind:value="originData.boardWriter"
							/>
						</dd>
					</dl>
				</div>
				<div class="cont">
					<textarea
						id="postArticle"
						placeholder="Input Content Here"
						v-bind:value="originData.boardArticle"
					></textarea>
				</div>
			</div>
			<div class="bt_wrap">
				<button
					class="on"
					v-on:click="patchData"
					@click="$router.push('../board_list')"
				>
					Post
				</button>
				<!-- <router-link to="../board_list">Cancel</router-link> -->
				<button @click="$router.push('../board_list')">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import axios from "axios";

export default {
	props: ["id"],
	data: () => ({
		originData: {
			id: Number,
			boardTitle: String,
			boardArticle: String,
			boardTag: String,
			boardWriter: String,
		},
		editData: {
			boardTitle: "",
			boardArticle: "",
			boardTag: "",
			boardWriter: "",
		},
	}),
	mounted() {
		axios
			.get(`http://localhost:8000/board/search/${this.$route.params.id}`)
			.then(res => {
				this.originData = res.data;
			});
	},
	methods: {
		patchData() {
			axios
				.patch(
					`http://localhost:8000/board/edit/${this.$route.params.id}`,
					this.editData,
				)
				.then(res => console.log(res));
		},
	},
};
</script>

<style>
@import url("../../styles/defaultCss.css");
@import url("../../styles/boardWrite.css");
</style>
