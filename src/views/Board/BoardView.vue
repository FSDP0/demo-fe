<template>
	<div class="board_wrap">
		<div class="board_title">
			<strong>OSC Korea</strong>
			<p>Board View</p>
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
								disabled
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
								disabled
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
								disabled
							/>
						</dd>
					</dl>
				</div>
				<div class="cont">
					<textarea
						id="postArticle"
						placeholder="Input Content Here"
						v-bind:value="originData.boardArticle"
						disabled
					></textarea>
				</div>
			</div>
			<div class="bt_wrap">
				<router-link
					class="on"
					:to="{
						path: `../board_edit/${originData.id}`,
						params: { id: Number(originData.id) },
					}"
					>Edit</router-link
				>
				<!-- <router-link :to="{ path: `${$router.go(-1)}` }">Cancel</router-link> -->
				<button @click="$router.go(-1)">Cancel</button>
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
	}),
	mounted() {
		axios
			.get(`http://localhost:8000/board/search/${this.$route.params.id}`)
			.then(res => {
				this.originData = res.data;
			});
	},
};
</script>

<style>
@import url("../../styles/defaultCss.css");
@import url("../../styles/boardWrite.css");
</style>
